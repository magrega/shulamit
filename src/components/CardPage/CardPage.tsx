import cards from "@/assets/cards.json";
import { backArrow, cardNextPrev } from "@/assets/icons";
import { cardBack } from "@/assets/img";
import { videosArray } from "@/assets/video";
import { FC } from "react";
import { Navigate, useNavigate, useParams } from "react-router";
import "./CardPage.css";

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

  const addPulseClass = () =>
    document.querySelector(".cardpage__card-vid")?.classList.add("pulse-video");

  const removePulseClass = () =>
    document
      .querySelector(".cardpage__card-vid")
      ?.classList.remove("pulse-video");

  if (cards[idNum] === undefined) return <Navigate to="/intro" replace />;

  return (
    <>
      <div className="cardpage">
        <button className="cardpage__btn" onClick={goBack}>
          <span className="cardpage__closebtn-wrapper">
            <img
              className="cardpage__closebtn-wrapper-img"
              src={backArrow}
              alt="back arrow"
            />
            Назад
          </span>
        </button>
        <h2 className="cardpage__h2">{`${cards[idNum].totem}`}</h2>
        <div className="cardpage__body">
          <div className="video-container">
            <video
              onLoadStart={addPulseClass}
              onPlaying={removePulseClass}
              className="cardpage__card-vid pulse-video"
              poster={cardBack}
              autoPlay
              loop
              playsInline
              muted
              src={videosArray[idNum]}
            />
          </div>
          <p className="cardpage__text">
            <span className="cardpage__text-category">Буква Иврита: </span>
            {`${cards[idNum].letter}`}
          </p>
          <p className="cardpage__text">
            <span className="cardpage__text-category">Значение: </span>
            {`${cards[idNum].meaning}`}
          </p>
          <p className="cardpage__text">
            <span className="cardpage__text-category">Элемент: </span>
            {`${cards[idNum].element}`}
          </p>
          <p className="cardpage__text">
            <span className="cardpage__text-category">Символы: </span>
            {`${cards[idNum].symbols}`}
          </p>
          <span className="cardpage__text-description">
            <span className="cardpage__text-category">Описание: </span>
            {`${cards[idNum].description}`}
          </span>
        </div>
      </div>
      <div className="cardpage-buttons">
        <button
          className={idNum === 1 ? "cardpage__btn inactive" : "cardpage__btn"}
          onClick={goPrev}
        >
          <img
            className="cardpage__prevbtn"
            src={cardNextPrev}
            alt="Prev card"
          />
        </button>
        <button
          className={
            idNum === cards.length ? "cardpage__btn inactive" : "cardpage__btn"
          }
          onClick={goNext}
        >
          <img
            className="cardpage__nextbtn"
            src={cardNextPrev}
            alt="Next card"
          />
        </button>
      </div>
    </>
  );
};

export default CardPage;
