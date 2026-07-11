import { localApi } from "@/constants";
import { shuffleArray } from "@/helpers";
import { ICardData } from "@/types";
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
  const [cards, setCards] = useState<ICardData[]>([]);
  const [shuffledCards, setShuffledCards] = useState<ICardData[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await fetch(localApi);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data: ICardData[] = await response.json();
        const sorted = [...data].sort((a, b) => a.id - b.id);
        setCards(sorted);
        setShuffledCards(shuffleArray(sorted));
      } catch (error) {
        console.error(`There was an error fetching cards: ${error}`);
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
