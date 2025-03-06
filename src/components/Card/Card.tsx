import { FC } from "react";
import { Link } from "react-router";
import { cardBack, imagesArray } from "../../assets/img";
import { TCardData } from "../Gallery/Gallery";
import "./Card.css";

interface ICard {
  card: TCardData;
  onImgLoad: () => void;
  isCardBack?: boolean;
}

const Card: FC<ICard> = ({ card, onImgLoad, isCardBack = false }) => {
  return (
    <div className="gallery-item">
      <div
        className={
          isCardBack
            ? "gallery-item__inner rotate"
            : "gallery-item__inner no-rotate"
        }
      >
        <div className="gallery-item__front">
          <Link style={{ display: "contents" }} to={`/card/${card.id}`}>
            <img
              draggable={false}
              className="gallery-item__pic"
              src={imagesArray[card.id]}
              alt={`${card.totem}`}
              onLoad={onImgLoad}
            />
          </Link>
        </div>
        <div className="gallery-item__back">
          <img
            draggable={false}
            className="gallery-item__pic"
            src={cardBack}
            alt={`Перевернутая карта`}
            onLoad={onImgLoad}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
