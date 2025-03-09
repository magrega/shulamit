import pulse from "@/animation/pulse.module.css";
import cards from "@/assets/cards.json";
import { backArrow, cardNextPrev } from "@/assets/icons";
import { cardBack } from "@/assets/img";
import { videosArray } from "@/assets/video";
import { FC, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router";
import styles from "./CardPage.module.css";

const CardPage: FC = () => {
  const { id } = useParams();
  const idNum = Number(id);
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const goNext = () => {
    if (idNum >= cards.length) return;
    navigate(`/card/${idNum + 1}`, { replace: true });
  };
  const goPrev = () => {
    if (idNum <= 1) return;
    navigate(`/card/${idNum - 1}`, { replace: true });
  };
  const [isPulsing, setPulsing] = useState(true);

  if (cards[idNum] === undefined) return <Navigate to="/intro" replace />;

  return (
    <>
      <div className={styles.cardpage}>
        <button className={styles.cardpageBtn} onClick={goBack}>
          <span className={styles.cardpageClosebtnWrapper}>
            <img
              className={styles.cardpageClosebtnWrapperImg}
              src={backArrow}
              alt="back arrow"
            />
            Назад
          </span>
        </button>
        <h2 className={styles.cardpageH2}>{`${cards[idNum].totem}`}</h2>
        <div className={styles.cardpageBody}>
          <div className={styles.videoContainer}>
            <video
              onPlaying={() => setPulsing(false)}
              className={`${styles.cardpageCardVid} ${
                isPulsing ? pulse.pulseVideo : ""
              }`}
              poster={cardBack}
              autoPlay
              loop
              playsInline
              muted
              src={videosArray[idNum]}
            />
          </div>
          <p className={styles.cardpageText}>
            <span className={styles.cardpageTextCategory}>Буква Иврита: </span>
            {`${cards[idNum].letter}`}
          </p>
          <p className={styles.cardpageText}>
            <span className={styles.cardpageTextCategory}>Значение: </span>
            {`${cards[idNum].meaning}`}
          </p>
          <p className={styles.cardpageText}>
            <span className={styles.cardpageTextCategory}>Элемент: </span>
            {`${cards[idNum].element}`}
          </p>
          <p className={styles.cardpageText}>
            <span className={styles.cardpageTextCategory}>Символы: </span>
            {`${cards[idNum].symbols}`}
          </p>
          <span className={styles.cardpageTextDescription}>
            <span className={styles.cardpageTextCategory}>Описание: </span>
            {`${cards[idNum].description}`}
          </span>
        </div>
      </div>
      <div className={styles.cardpageButtons}>
        <button
          className={
            idNum === 0
              ? `${styles.cardpageBtn}${styles.inactive}`
              : styles.cardpageBtn
          }
          onClick={goPrev}
        >
          <img
            className={styles.cardpagePrevbtn}
            src={cardNextPrev}
            alt="Prev card"
          />
        </button>
        <button
          className={
            idNum === cards.length
              ? `${styles.cardpageBtn}${styles.inactive}`
              : styles.cardpageBtn
          }
          onClick={goNext}
        >
          <img
            className={styles.cardpageNextbtn}
            src={cardNextPrev}
            alt="Next card"
          />
        </button>
      </div>
    </>
  );
};

export default CardPage;
