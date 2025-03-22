import { cardBack } from "@/assets/img";
import { FC, VideoHTMLAttributes } from "react";
import styles from "./CardPage.module.css";

const CardVideo: FC<VideoHTMLAttributes<HTMLVideoElement>> = (props) => {
  return (
    <div className={styles.videoContainer}>
      <video poster={cardBack} autoPlay loop playsInline muted {...props} />
    </div>
  );
};

export default CardVideo;
