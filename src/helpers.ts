import { ICardData } from "./types";
export const BASE_URL = "https://www.shulanika.ru";

export const shuffleArray = (array: ICardData[]) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

export const moveScrollToTop = () =>
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "instant",
  });
