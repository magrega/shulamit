import shake from "@/animation/shakeX.module.css";
import { shuffleArray } from "@/helpers";
import { ICardData } from "@/types";
import cards from "@assets/cards.json";
import { FC, useEffect, useState } from "react";
import Card from "../Card/Card";
import Loader from "../Loader/Loader";
import ShuffleButton from "../ShuffleButton/ShuffleButton";
import styles from "./Gallery.module.css";

interface IGallery {
  isCardBack: boolean;
}

const Gallery: FC<IGallery> = ({ isCardBack }) => {
  const [cardsArray, setCardsArray] = useState(shuffleArray(cards));
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isShaking, setShaking] = useState(false);

  const onImgLoad = () => setImagesLoaded((prev) => prev + 1);

  const shuffleCards = (cardsArray: ICardData[]) => {
    setCardsArray(shuffleArray(cardsArray));
  };

  const addShuffle = () => {
    shuffleCards(cardsArray);
    setShaking(true);
  };

  const removeShuffle = () => {
    setShaking(false);
  };

  useEffect(() => {
    if (imagesLoaded === cardsArray.length * 2) {
      setLoading(false);
      setImagesLoaded(0);
    }
  }, [cardsArray.length, imagesLoaded]);

  return (
    <>
      {loading && <Loader />}

      <div
        className={`${styles.galleryContainer} ${
          isShaking ? shake.animateShakeX : ""
        }`}
        style={{ display: loading ? "none" : "flex" }}
        onAnimationEnd={removeShuffle}
      >
        {isCardBack
          ? cardsArray.map((card: ICardData) => (
              <Card
                key={card.id}
                card={card}
                onImgLoad={onImgLoad}
                animatedClass={isShaking ? shake.cardLock : ""}
                isCardBack
              />
            ))
          : cards.map((card: ICardData) => (
              <Card key={card.id + "a"} card={card} onImgLoad={onImgLoad} />
            ))}
      </div>
      {isCardBack && <ShuffleButton addShuffle={addShuffle} />}
    </>
  );
};

export default Gallery;
