import pulse from "@/animation/pulse.module.css";
import { cardNextPrev } from "@/assets/icons";
import { videosArray } from "@/assets/video";
import { cn } from "@/helpers";
import { useCards } from "@/hooks/useCards";
import { useSwipe } from "@/hooks/useSwipe";
import { FC, useCallback, useEffect, useState } from "react";
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
  const index = cards.findIndex((c) => String(c.id) === id);
  const card = cards[index];

  const navigate = useNavigate();

  const goBack = useCallback(() => navigate(-1), [navigate]);
  const goNext = useCallback(() => {
    const next = cards[index + 1];
    if (next) navigate(`/card/${next.id}`, { replace: true });
  }, [cards, index, navigate]);

  const goPrev = useCallback(() => {
    const prev = cards[index - 1];
    if (prev) navigate(`/card/${prev.id}`, { replace: true });
  }, [cards, index, navigate]);

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

  useEffect(() => setPulsing(true), [index]);

  if (isLoading) return <Loader />;
  if (!card) return <Navigate to="/intro" replace />;

  return (
    <>
      <div className={styles.cardpage}>
        <BackBtn onClick={goBack} />
        <h2 className={styles.cardpageH2}>{card.totem}</h2>
        <CardPageHint />
        <div
          className={styles.cardpageBody}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={handleSwipeEnd}
        >
          <CardVideo
            onPlaying={() => setPulsing(false)}
            className={cn(
              styles.cardpageCardVid,
              isPulsing && pulse.pulseVideo,
            )}
            src={videosArray[card.id]}
          />
          <CardText card={card} />
        </div>
      </div>
      <div className={styles.cardpageButtons}>
        <button
          type="button"
          className={cn(styles.cardpageBtn, index <= 0 && styles.inactive)}
          onClick={goPrev}
        >
          <img
            className={styles.cardpagePrevbtn}
            src={cardNextPrev}
            alt="Prev card"
          />
        </button>
        <button
          type="button"
          className={cn(
            styles.cardpageBtn,
            index >= cards.length - 1 && styles.inactive,
          )}
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
