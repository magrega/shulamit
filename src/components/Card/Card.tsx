import { ICardData } from "@/types";
import { FC } from "react";
import { Link } from "react-router";
import { cardBack, imagesArray } from "../../assets/img";
import styles from "./Card.module.css";

interface ICard {
  card: ICardData;
  onImgLoad: () => void;
  animatedClass?: string;
  isCardBack?: boolean;
}

const Card: FC<ICard> = ({
  card,
  onImgLoad,
  animatedClass = "",
  isCardBack = false,
}) => {
  const id = +card.id;
  return (
    <div className={`${styles.galleryItem} ${animatedClass}`}>
      <div
        className={` ${styles.galleryItemInner} 
         ${isCardBack ? styles.rotate : ""}`}
      >
        <div className={styles.galleryItemFront}>
          <Link style={{ display: "contents" }} to={`/card/${id + 1}`}>
            <img
              draggable={false}
              className={styles.galleryItemPic}
              src={imagesArray[id]}
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
