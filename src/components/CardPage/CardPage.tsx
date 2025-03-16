import pulse from "@/animation/pulse.module.css";
import { backArrow, cardNextPrev } from "@/assets/icons";
import { cardBack } from "@/assets/img";
import { videosArray } from "@/assets/video";
import { moveScrollToTop } from "@/helpers";
import { useCards } from "@/hooks/useCards";
import { useSwipe } from "@/hooks/useSwipe";
import { FC, useCallback, useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router";
import styles from "./CardPage.module.css";

const CardPage: FC = () => {
  const { onTouchStart, onTouchMove, onTouchEnd } = useSwipe();
  const { cards } = useCards();
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

  useEffect(() => moveScrollToTop, [idNum]);

  if (cards[cardId] === undefined) return <Navigate to="/intro" replace />;

  return (
    <>
      <div
        className={styles.cardpage}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={handleSwipeEnd}
      >
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            optio recusandae sed maiores, culpa excepturi, necessitatibus id
            quod quis nobis tenetur corrupti inventore molestiae ex atque
            exercitationem rem sint esse! Voluptatibus id maiores eaque quaerat
            dolorum, doloremque ullam quibusdam officiis sint exercitationem
            distinctio sit ea rem quam velit inventore enim iure. Aliquam est,
            laudantium explicabo nisi cum adipisci suscipit ad! Repudiandae
            mollitia vel ipsum, illum dolore quam harum blanditiis modi fugiat
            numquam culpa, magnam adipisci? Quis porro doloremque, beatae
            aspernatur rerum sequi itaque impedit quae dolor perspiciatis ex
            omnis error. Animi alias nisi, culpa voluptates itaque distinctio
            facere totam reprehenderit error ipsam assumenda unde excepturi
            possimus quidem quisquam et aspernatur aperiam libero eos?
            Accusantium quis repellendus obcaecati modi magnam? Ratione? Ipsum
            commodi quae fugiat architecto voluptates minus temporibus molestiae
            nesciunt asperiores, atque rerum. Commodi unde repudiandae
            necessitatibus quasi, neque natus optio molestias possimus ducimus
            nobis. Ex optio quam ad dolore? Similique consectetur mollitia fugit
            animi explicabo. Eligendi alias facilis eos quam iure quae minima
            numquam recusandae, unde expedita adipisci architecto nisi,
            perspiciatis libero dolore laborum odit suscipit, perferendis ipsum
            veritatis. Hic, molestias cumque ducimus sit eligendi perspiciatis
            enim quaerat sapiente repudiandae architecto repellat et tempora
            eveniet velit amet. Necessitatibus culpa odio quibusdam. Et sunt
            quisquam voluptas excepturi quae tempora blanditiis! Aliquid
            assumenda consectetur a quae repudiandae delectus eius unde
            recusandae, fugiat quam quos perspiciatis qui, quibusdam corrupti
            aut quas rerum laboriosam impedit nemo consequuntur et. Laudantium
            sit hic saepe quasi. Fugiat qui aspernatur fuga at, consectetur
            voluptates, voluptate mollitia debitis possimus totam aliquid nobis
            rem reiciendis eum voluptatem voluptatibus earum. Explicabo officia
            tempore quaerat excepturi eius dignissimos ea magni modi. Nemo illo
            sequi architecto. Officiis officia beatae labore nemo perferendis
            voluptates iste suscipit hic commodi fugiat voluptas exercitationem
            ratione, animi deleniti nulla consequuntur, neque veritatis
            distinctio laborum omnis voluptatum id!
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
