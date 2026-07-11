import { ICardData } from "./types";

type ClassValue = string | false | null | undefined;

export const cn = (...classes: ClassValue[]) =>
  classes.filter(Boolean).join(" ");

export const shuffleArray = (array: ICardData[]) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};
