import { ClockLoader } from "react-spinners";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <ClockLoader color="#e3ba64" />
    </div>
  );
};

export default Loader;
