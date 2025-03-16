import CardsContext from "@/providers/CardsProvider";
import { useContext } from "react";

export const useCards = () => useContext(CardsContext);
