import { backArrow } from "@/assets/icons";
import { ButtonHTMLAttributes, FC } from "react";
import styles from "./CardPage.module.css";

const BackBtn: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return (
    <button className={styles.cardpageBtn} {...props}>
      <span className={styles.cardpageClosebtnWrapper}>
        <img
          className={styles.cardpageClosebtnWrapperImg}
          src={backArrow}
          alt="back arrow"
        />
        Назад
      </span>
    </button>
  );
};

export default BackBtn;
