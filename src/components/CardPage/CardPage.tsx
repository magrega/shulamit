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

    return (
        <Box className='cardpage'>
            <button type="button" className="cardpage__closebtn" onClick={goBack}>
                <span className='cardpage__closebtn-wrapper'>
                    <img className='cardpage__closebtn-wrapper-img' src={require(`../../assets/icons/backArrow.svg`).default} alt="back arrow" />Назад</span>
            </button>
            <h2 className='cardpage__h2'>{`${cards[index].totem}`}</h2>
            <div className="cardpage__body">
                <video className="cardpage__card-vid"
                    poster={require(`../../assets/img/${id}.webp`)}
                    autoPlay
                    loop
                    playsInline
                    muted
                    src={require(`../../assets/video/${id}.mp4`)} />
                <p className="text-align-left"><span className='cardpage__text-category'>Буква Иврита: </span>{`${cards[index].letter}`}</p>
                <br />
                <p className="text-align-left"><span className='cardpage__text-category'>Значение: </span>{`${cards[index].meaning}`}</p>
                <br />
                <p className="text-align-left"><span className='cardpage__text-category'>Элемент: </span>{`${cards[index].element}`}</p>
                <br />
                <p className="text-align-left"><span className='cardpage__text-category'>Символы: </span>{`${cards[index].symbols}`}</p>
                <br />
                <span className="cardpage__text-description"><span className='cardpage__text-category'>Описание: </span>{`${cards[index].description}`}</span>
            </div>
        </Box>
    );
};

export default CardPage;