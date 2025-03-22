import { ICardData } from "@/types";
import styles from "./CardPage.module.css";

interface CardTextProps {
  card: ICardData;
}

const CardText = ({ card }: CardTextProps) => {
  return (
    <>
      <p className={styles.cardpageText}>
        <span className={styles.cardpageTextCategory}>Буква Иврита: </span>
        {card.letter}
      </p>
      <p className={styles.cardpageText}>
        <span className={styles.cardpageTextCategory}>Значение: </span>
        {card.meaning}
      </p>
      <p className={styles.cardpageText}>
        <span className={styles.cardpageTextCategory}>Элемент: </span>
        {card.element}
      </p>
      <p className={styles.cardpageText}>
        <span className={styles.cardpageTextCategory}>Символы: </span>
        {card.symbols}
      </p>
      <span className={styles.cardpageTextDescription}>
        <span className={styles.cardpageTextCategory}>Описание: </span>
        {card.description}
      </span>
    </>
  );
};

export default CardText;
