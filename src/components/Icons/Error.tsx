import { errorIcon } from "@/assets/img";
import { cn } from "@/helpers";
import styles from "./Icons.module.css";

const Error = () => {
  return (
    <div className={cn(styles.iconWrapper, styles.errorWrapper)}>
      <img
        src={errorIcon}
        alt="There was an error"
        className={styles.errorIcon}
      />
      <p>Произошла ошибка при загрузке карточек, попробуйте позже.</p>
    </div>
  );
};

export default Error;
