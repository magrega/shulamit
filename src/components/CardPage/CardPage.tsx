import { FC } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import cards from '../../assets/cards.json';
import './CardPage.css';


const CardPage: FC = () => {
    const { id } = useParams() as { id: string };
    const idNum = Number(id);
    const index = idNum - 1;

    const navigate = useNavigate();

    const goBack = () => navigate(-1);
    const goNext = () => {
        if (idNum >= cards.length) return;
        navigate(`/card/${idNum + 1}`, { replace: true });
    }
    const goPrev = () => {
        if (idNum <= 1) return;
        navigate(`/card/${idNum - 1}`, { replace: true });
    }

    if (cards[index] === undefined) return <Navigate to="/intro" replace />

    return (
        <>
            <div className='cardpage'>
                <button className="cardpage__btn" onClick={goBack}>
                    <span className='cardpage__closebtn-wrapper'>
                        <img className='cardpage__closebtn-wrapper-img' src={require(`../../assets/icons/backArrow.svg`).default} alt="back arrow" />
                        Назад
                    </span>
                </button>
                <h2 className='cardpage__h2'>{`${cards[index].totem}`}</h2>
                <div className="cardpage__body">
                    <div className="video-container">
                        <video className="cardpage__card-vid"
                            autoPlay
                            loop
                            playsInline
                            muted
                            src={require(`../../assets/video/${id}.mp4`)} />
                    </div>
                    <p className="cardpage__text"><span className='cardpage__text-category'>Буква Иврита: </span>{`${cards[index].letter}`}</p>
                    <p className="cardpage__text"><span className='cardpage__text-category'>Значение: </span>{`${cards[index].meaning}`}</p>
                    <p className="cardpage__text"><span className='cardpage__text-category'>Элемент: </span>{`${cards[index].element}`}</p>
                    <p className="cardpage__text"><span className='cardpage__text-category'>Символы: </span>{`${cards[index].symbols}`}</p>
                    <span className="cardpage__text-description"><span className='cardpage__text-category'>Описание: </span>{`${cards[index].description}`}</span>
                </div>
            </div>
            <div className="cardpage-buttons">
                <button className={idNum === 1 ? 'cardpage__btn inactive' : 'cardpage__btn'} onClick={goPrev}><img className='cardpage__prevbtn' src={require(`../../assets/icons/cardNextPrev.svg`).default} alt="Prev card" /></button>
                <button className={idNum === cards.length ? 'cardpage__btn inactive' : 'cardpage__btn'} onClick={goNext}><img className='cardpage__nextbtn' src={require(`../../assets/icons/cardNextPrev.svg`).default} alt="Next card" /></button>
            </div>
        </>
    );
};

export default CardPage;