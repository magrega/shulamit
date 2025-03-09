import pulse from "@/animation/pulse.module.css";
import cards from "@/assets/cards.json";
import { backArrow, cardNextPrev } from "@/assets/icons";
import { cardBack } from "@/assets/img";
import { videosArray } from "@/assets/video";
import { FC, useCallback, useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router";
import styles from "./CardPage.module.css";

const CardPage: FC = () => {
  const [isPulsing, setPulsing] = useState(true);

  const { id } = useParams();
  const idNum = Number(id);
  const cardId = Number(id) - 1;

  const navigate = useNavigate();
  const goBack = useCallback(() => navigate(-1), [navigate]);
  const goNext = useCallback(() => {
    if (idNum >= cards.length) return;
    navigate(`/card/${idNum + 1}`, { replace: true });
  }, [idNum, navigate]);
  const goPrev = useCallback(() => {
    if (idNum <= 1) return;
    navigate(`/card/${idNum - 1}`, { replace: true });
  }, [idNum, navigate]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "Escape") goBack();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goBack, goNext, goPrev]);

  if (cards[cardId] === undefined) return <Navigate to="/intro" replace />;

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
        <h2 className={styles.cardpageH2}>{`${cards[cardId].totem}`}</h2>
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
              src={videosArray[cardId]}
            />
          </div>
          <p className={styles.cardpageText}>
            <span className={styles.cardpageTextCategory}>Буква Иврита: </span>
            {`${cards[cardId].letter}`}
          </p>
          <p className={styles.cardpageText}>
            <span className={styles.cardpageTextCategory}>Значение: </span>
            {`${cards[cardId].meaning}`}
          </p>
          <p className={styles.cardpageText}>
            <span className={styles.cardpageTextCategory}>Элемент: </span>
            {`${cards[cardId].element}`}
          </p>
          <p className={styles.cardpageText}>
            <span className={styles.cardpageTextCategory}>Символы: </span>
            {`${cards[cardId].symbols}`}
          </p>
          <span className={styles.cardpageTextDescription}>
            <span className={styles.cardpageTextCategory}>Описание: </span>
            {`${cards[cardId].description}`}
          </span>
        </div>
      </div>
      <div className={styles.cardpageButtons}>
        <button
          className={
            cardId === 0
              ? `${styles.cardpageBtn} ${styles.inactive}`
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
            cardId === cards.length - 1
              ? `${styles.cardpageBtn} ${styles.inactive}`
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
