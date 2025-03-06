import "animate.css";
import { FC, useEffect, useState } from "react";
import cards from "../../assets/cards.json";
import Card from "../Card/Card";
import Loader from "../Loader/Loader";
import ShuffleButton from "../ShuffleButton/ShuffleButton";
import "./Gallery.css";

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
  const [cardsArray, setCardsArray] = useState([...cards]);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [loading, setLoading] = useState(true);

  const onImgLoad = () => setImagesLoaded((prev) => prev + 1);

  const shuffleCards = (cardsArray: TCardData[]) => {
    setCardsArray(shuffleArray(cardsArray));
  };

  const addShuffle = () => {
    document
      .querySelector(".gallery-container")
      ?.classList.add("animate__shakeX");
    document
      .querySelectorAll(".gallery-item")
      ?.forEach((item) => item.classList.add("card-lock"));
    shuffleCards(cardsArray);
  };

  const removeShuffle = () => {
    document
      .querySelector(".gallery-container")
      ?.classList.remove("animate__shakeX");
    document
      .querySelectorAll(".gallery-item")
      ?.forEach((item) => item.classList.remove("card-lock"));
  };

  const shuffleArray = (array: TCardData[]) => {
    const tempArray = [...array];
    for (let i = tempArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [tempArray[i], tempArray[j]] = [tempArray[j], tempArray[i]];
    }
    return tempArray;
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
        className="gallery-container animate__animated"
        style={{ display: loading ? "none" : "flex" }}
        onAnimationEnd={removeShuffle}
      >
        {isCardBack
          ? cardsArray.map((card: TCardData) => (
              <Card
                key={card.id}
                card={card}
                onImgLoad={onImgLoad}
                isCardBack={isCardBack}
              />
            ))
          : cards.map((card: TCardData) => (
              <Card
                key={card.id + "a"}
                card={card}
                onImgLoad={onImgLoad}
                isCardBack={isCardBack}
              />
            ))}
      </div>
      {isCardBack && <ShuffleButton addShuffle={addShuffle} />}
    </>
  );
};

export default Gallery;
