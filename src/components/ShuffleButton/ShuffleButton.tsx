import { shuffle } from "@/assets/icons";
import { FC } from "react";
import styles from "./ShuffleButton.module.css";

interface IShuffleButton {
  addShuffle: () => void;
}

const ShuffleButton: FC<IShuffleButton> = ({ addShuffle }) => {
  return (
    <button className={styles.shuffleCards} onClick={addShuffle} type="button">
      <img
        draggable={false}
        className={styles.galleryItemShuffleImg}
        src={shuffle}
        alt={`Перемешать карты`}
      />
    </button>
  );
};

export default ShuffleButton;
