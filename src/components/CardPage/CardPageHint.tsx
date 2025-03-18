import { arrowLeft, arrowRight } from "@/assets/icons";
import { useIsDesktop } from "@/hooks/useIsDesktop";
import styles from "./CardPage.module.css";

const CardPageHint = () => {
  const { isDesktop } = useIsDesktop();

  return isDesktop ? (
    <p className={styles.cardpageHint}>
      Используйте <img src={arrowLeft} className={styles.cardpageIcon} />
      <img src={arrowRight} className={styles.cardpageIcon} />, чтобы сменить
      карточку.
    </p>
  ) : (
    <p className={styles.cardpageHint}>
      Смахивайте влево\вправо, чтобы сменить карточку.
    </p>
  );
};

export default CardPageHint;
