import { FC } from "react";
import { Link } from "react-router";
import { cardBack, imagesArray } from "../../assets/img";
import { TCardData } from "../Gallery/Gallery";
import styles from "./Card.module.css";
import "./CardLock.css";

interface ICard {
  card: TCardData;
  onImgLoad: () => void;
  isCardBack?: boolean;
}

const Card: FC<ICard> = ({ card, onImgLoad, isCardBack = false }) => {
  return (
    <div className={`${styles.galleryItem} gallery-item`}>
      <div
        className={
          isCardBack
            ? `${styles.galleryItemInner} ${styles.rotate}`
            : `${styles.galleryItemInner}`
        }
      >
        <div className={styles.galleryItemFront}>
          <Link style={{ display: "contents" }} to={`/card/${card.id}`}>
            <img
              draggable={false}
              className={styles.galleryItemPic}
              src={imagesArray[card.id]}
              alt={`${card.totem}`}
              onLoad={onImgLoad}
            />
          </Link>
        </div>
        <div className={styles.galleryItemBack}>
          <img
            draggable={false}
            className={styles.galleryItemPic}
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
