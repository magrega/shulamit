import pulse from "@/animation/pulse.module.css";
import { cardNextPrev } from "@/assets/icons";
import { videosArray } from "@/assets/video";
import { moveScrollToTop } from "@/helpers";
import { useCards } from "@/hooks/useCards";
import { useSwipe } from "@/hooks/useSwipe";
import { FC, useCallback, useEffect, useLayoutEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router";
import Loader from "../Icons/Loader";
import BackBtn from "./BackBtn";
import styles from "./CardPage.module.css";
import CardPageHint from "./CardPageHint";
import CardText from "./CardText";
import CardVideo from "./CardVideo";

const CardPage: FC = () => {
  const { onTouchStart, onTouchMove, onTouchEnd } = useSwipe();
  const { cards, isLoading } = useCards();
  const [isPulsing, setPulsing] = useState(true);

  const { id } = useParams();
  const idNum = Number(id);
  const cardId = Number(id) - 1;

  const navigate = useNavigate();

  const goBack = useCallback(() => navigate(-1), [navigate]);
  const goNext = useCallback(() => {
    if (idNum >= cards.length) return;
    navigate(`/card/${idNum + 1}`, { replace: true });
  }, [cards.length, idNum, navigate]);

  const goPrev = useCallback(() => {
    if (idNum <= 1) return;
    navigate(`/card/${idNum - 1}`, { replace: true });
  }, [idNum, navigate]);

  const handleSwipeEnd = () => {
    const swipeDir = onTouchEnd();
    if (swipeDir === "left") goNext();
    if (swipeDir === "right") goPrev();
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "Escape") goBack();
    };

    const ctrl = new AbortController();
    window.addEventListener("keydown", onKeyDown, ctrl);
    return () => ctrl.abort();
  }, [goBack, goNext, goPrev]);

  useLayoutEffect(() => moveScrollToTop, [idNum]);
  useEffect(() => setPulsing(true), [idNum]);

  if (isLoading) return <Loader />;
  if (cards[cardId] === undefined) return <Navigate to="/intro" replace />;

  return (
    <>
      <div className={styles.cardpage}>
        <BackBtn onClick={goBack} />
        <h2 className={styles.cardpageH2}>{cards[cardId].totem}</h2>
        <CardPageHint />
        <div
          className={styles.cardpageBody}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={handleSwipeEnd}
        >
          <CardVideo
            onPlaying={() => setPulsing(false)}
            className={`${styles.cardpageCardVid} ${
              isPulsing ? pulse.pulseVideo : ""
            }`}
            src={videosArray[cardId]}
          />
          <CardText card={cards[cardId]} />
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
