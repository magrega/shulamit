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
            <div className="cardpage__body">
                <div className="cardpage__video-container">
                    <video className="cardpage__card-vid"
                        poster={require(`../../assets/img/${id}.webp`)}
                        autoPlay
                        loop
                        playsInline
                        muted
                        src={require(`../../assets/video/${id}.mp4`)} />
                </div>
                <div className='cardpage__card-text'>
                    <p className='cardpage__p' >{`Тотем силы: ${cards[index].totem}`}</p>
                    <p className='cardpage__p' >{`Буква Иврита: ${cards[index].letter}`}</p>
                    <p className='cardpage__p' >{`Значение: ${cards[index].meaning}`}</p>
                    <p className='cardpage__p' >{`Элемент: ${cards[index].element}`}</p>
                    <p className='cardpage__p' >{`Символы: ${cards[index].symbols}`}</p>
                    <p className='cardpage__p description' >{`Описание: ${cards[index].description}`}</p>
                </div>
            </div>
        </Box>
    );
};

export default CardPage;