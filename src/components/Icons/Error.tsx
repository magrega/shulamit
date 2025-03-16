import { errorIcon } from "@/assets/img";
import styles from "./Icons.module.css";

const Error = () => {
  return (
    <div className={`${styles.iconWrapper} + ${styles.errorWrapper}`}>
      <img
        src={errorIcon}
        alt="There was an error"
        className={styles.errorIcon}
      />
      <p>There was an error loading cards. Try again later.</p>
    </div>
  );
};

export default Error;
