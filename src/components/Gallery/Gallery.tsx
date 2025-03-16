import shake from "@/animation/shakeX.module.css";
import { shuffleArray } from "@/helpers";
import { useCards } from "@/hooks/useCards";
import { ICardData } from "@/types";
import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router";
import Card from "../Card/Card";
import Overlay from "../Icons/Overlay";
import ShuffleButton from "../ShuffleButton/ShuffleButton";
import styles from "./Gallery.module.css";

interface IGallery {
  isCardBack: boolean;
}

const Gallery: FC<IGallery> = ({ isCardBack }) => {
  const { pathname } = useLocation();
  const { isLoading, isError, cards, shuffledCards, setShuffledCards } =
    useCards();

  const [isImgLoading, setImgLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const onImgLoad = () => {
    setImagesLoaded((prev) => prev + 1);
  };

  const [isShaking, setShaking] = useState(false);

  const shuffleCards = (cardsArray: ICardData[]) => {
    setShuffledCards(shuffleArray(cardsArray));
  };

  const addShuffle = () => {
    shuffleCards(shuffledCards);
    setShaking(true);
  };

  const removeShuffle = () => {
    setShaking(false);
  };

  useEffect(() => {
    setImagesLoaded(0);
    setImgLoading(true);
  }, [pathname]);

  useEffect(() => {
    if (cards.length && imagesLoaded === cards.length * 2) {
      setImgLoading(false);
    }
  }, [cards.length, imagesLoaded]);

  if (isError) return <Overlay isError />;

  const isPageLoading = isLoading || isImgLoading;

  return (
    <>
      {<Overlay isLoading={isPageLoading} />}

      <div style={{ display: isPageLoading ? "none" : "flex" }}>
        <div
          className={`${styles.galleryContainer} ${
            isShaking ? shake.animateShakeX : ""
          }`}
          onAnimationEnd={removeShuffle}
        >
          {isCardBack
            ? shuffledCards.map((card: ICardData) => (
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
      </div>
    </>
  );
};

export default Gallery;
