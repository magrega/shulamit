import { Box } from '@mui/material';
import { FC } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import cards from '../../assets/cards.json';
import './CardPage.css';


const CardPage: FC = () => {
    const { id } = useParams();

    const index = Number(id) - 1;

    const navigate = useNavigate();

    const goBack = () => navigate(-1);
    const goNext = () => {
        if (id && +id >= 22) return;
        id && navigate(`/card/${+id + 1}`, { replace: true });
    }
    const goPrev = () => {
        if (id && +id <= 1) return;
        id && navigate(`/card/${+id - 1}`, { replace: true });
    }

    if (!cards[index].totem) return null;

    return (
        <Box className='cardpage'>
            <button className="cardpage__btn" onClick={goBack}>
                <span className='cardpage__closebtn-wrapper'>
                    <img className='cardpage__closebtn-wrapper-img' src={require(`../../assets/icons/backArrow.svg`).default} alt="back arrow" />
                    Назад
                </span>
            </button>
            <div className="cardpage-buttons">
                <button className={id && +id === 1 ? 'cardpage__btn inactive' : 'cardpage__btn'} onClick={goPrev}><img className='cardpage__prevbtn' src={require(`../../assets/icons/cardNextPrev.svg`).default} alt="Prev card" /></button>
                <button className={id && +id === cards.length ? 'cardpage__btn inactive' : 'cardpage__btn'} onClick={goNext}><img className='cardpage__nextbtn' src={require(`../../assets/icons/cardNextPrev.svg`).default} alt="Next card" /></button>
            </div>
            <h2 className='cardpage__h2'>{`${cards[index].totem}`}</h2>
            <div className="cardpage__body">
                <video className="cardpage__card-vid"
                    poster={require(`../../assets/img/${id}.webp`)}
                    autoPlay
                    loop
                    playsInline
                    muted
                    src={require(`../../assets/video/${id}.mp4`)} />
                <p className="cardpage__text"><span className='cardpage__text-category'>Буква Иврита: </span>{`${cards[index].letter}`}</p>
                <p className="cardpage__text"><span className='cardpage__text-category'>Значение: </span>{`${cards[index].meaning}`}</p>
                <p className="cardpage__text"><span className='cardpage__text-category'>Элемент: </span>{`${cards[index].element}`}</p>
                <p className="cardpage__text"><span className='cardpage__text-category'>Символы: </span>{`${cards[index].symbols}`}</p>
                <span className="cardpage__text-description"><span className='cardpage__text-category'>Описание: </span>{`${cards[index].description}`}</span>
            </div>
        </Box>
    );
};

export default CardPage;