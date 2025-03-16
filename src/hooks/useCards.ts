import { shuffleArray } from "@/helpers";
import { ICardData } from "@/types";
import axios from "axios";
import { useEffect, useState } from "react";

export const useCards = () => {
  const [cards, setCards] = useState<ICardData[]>([]);
  const [shuffledCards, setShuffledCards] = useState<ICardData[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        setLoading(true);
        setError(false);
        const request = await axios.get("http://localhost:3002/cards");
        setCards(request.data);
        setShuffledCards(shuffleArray(request.data));
      } catch (error) {
        console.log(`There was an error fetching cards: ${error}`);
        setError(true);
      } finally {
        setLoading(false);
        setError(true);
      }
    };

    fetchCards();
  }, []);

  return { cards, shuffledCards, setShuffledCards, isLoading, isError };
};
