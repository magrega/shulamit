import { shuffleArray } from "@/helpers";
import { ICardData } from "@/types";
import axios from "axios";
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useEffect,
  useState,
} from "react";

interface ICardsContext {
  isLoading: boolean;
  isError: boolean;
  cards: ICardData[];
  shuffledCards: ICardData[];
  setShuffledCards: Dispatch<SetStateAction<ICardData[]>>;
}

const CardsContext = createContext<ICardsContext>({} as ICardsContext);

export const CardsProvider = ({ children }: PropsWithChildren) => {
  const getCurrentNodeEnv = () => {
    const mode = process.env.NODE_ENV;
    const localApi = "http://localhost:3002/cards";
    const jsonServer = "https://jsonapi.metabroadcast.ru/cards";

    if (mode === "development") return localApi;
    if (mode === "production") return jsonServer;
    return jsonServer;
  };

  const [cards, setCards] = useState<ICardData[]>([]);
  const [shuffledCards, setShuffledCards] = useState<ICardData[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        setLoading(true);
        setError(false);
        const request = await axios.get(getCurrentNodeEnv());
        setCards(request.data);
        setShuffledCards(shuffleArray(request.data));
      } catch (error) {
        console.log(`There was an error fetching cards: ${error}`);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);
  return (
    <CardsContext.Provider
      value={{ cards, shuffledCards, setShuffledCards, isLoading, isError }}
    >
      {children}
    </CardsContext.Provider>
  );
};

export default CardsContext;
