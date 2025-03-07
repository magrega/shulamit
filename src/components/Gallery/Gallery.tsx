import cards from "@assets/cards.json";
import "animate.css";
import { FC, useEffect, useState } from "react";
import Card from "../Card/Card";
import Loader from "../Loader/Loader";
import ShuffleButton from "../ShuffleButton/ShuffleButton";
import styles from "./Gallery.module.css";

export interface TCardData {
  id: number;
  totem: string;
  letter: string;
  meaning: string;
  element: string;
  symbols: string;
  description: string;
}

interface IGallery {
  isCardBack: boolean;
}

const Gallery: FC<IGallery> = ({ isCardBack }) => {
  const [cardsArray, setCardsArray] = useState(cards);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [loading, setLoading] = useState(true);

  const onImgLoad = () => setImagesLoaded((prev) => prev + 1);

  const shuffleCards = (cardsArray: TCardData[]) => {
    setCardsArray(shuffleArray(cardsArray));
  };

  const addShuffle = () => {
    document
      .querySelector(`.${styles.galleryContainer}`)
      ?.classList.add("animate__shakeX");
    document
      .querySelectorAll(".gallery-item")
      ?.forEach((item) => item.classList.add(styles.cardLock));
    shuffleCards(cardsArray);
  };

  const removeShuffle = () => {
    document
      .querySelector(`.${styles.galleryContainer}`)
      ?.classList.remove("animate__shakeX");
    document
      .querySelectorAll(".gallery-item")
      ?.forEach((item) => item.classList.remove(styles.cardLock));
  };

  const shuffleArray = (array: TCardData[]) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  useEffect(() => {
    if (imagesLoaded === cardsArray.length * 2) {
      setLoading(false);
      setImagesLoaded(0);
    }
  }, [cardsArray.length, imagesLoaded]);

  useEffect(() => shuffleCards(cardsArray), []);

  return (
    <>
      {loading && <Loader />}

      <div
        className={`${styles.galleryContainer} animate__animated`}
        style={{ display: loading ? "none" : "flex" }}
        onAnimationEnd={removeShuffle}
      >
        {isCardBack
          ? cardsArray.map((card: TCardData) => (
              <Card
                key={card.id}
                card={card}
                onImgLoad={onImgLoad}
                isCardBack
              />
            ))
          : cards.map((card: TCardData) => (
              <Card key={card.id + "a"} card={card} onImgLoad={onImgLoad} />
            ))}
      </div>
      {isCardBack && <ShuffleButton addShuffle={addShuffle} />}
    </>
  );
};

export default Gallery;
