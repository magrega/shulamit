import { ClockLoader } from "react-spinners";
import styles from "./Icons.module.css";

const Loader = () => {
  return (
    <div className={styles.iconWrapper}>
      <ClockLoader color="#e3ba64" />
    </div>
  );
};

export default Loader;
