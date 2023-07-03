import { FC } from 'react';
import { Link } from 'react-router-dom';
import { TCardData } from '../Gallery/Gallery';
import './Card.css';

interface ICard {
    card: TCardData,
    onImgLoad: () => void,
    isCardBack: boolean
}

const Card: FC<ICard> = ({ card, onImgLoad, isCardBack }) => {
    return (
        <div className='gallery-item'>
            <div className={isCardBack ? 'gallery-item__inner rotate' : 'gallery-item__inner no-rotate'}>
                <div className="gallery-item__front">
                    <Link style={{ display: 'contents' }} to={`/card/${card.id}`}>
                        <img draggable={false}
                            className='gallery-item__pic'
                            src={require(`../../assets/img/${card.id}.webp`)}
                            alt={`${card.totem}`}
                            onLoad={onImgLoad} />
                    </Link>
                </div>
                <div className="gallery-item__back">
                    <img draggable={false}
                        className="gallery-item__pic"
                        src={require(`../../assets/img/cardBack.webp`)}
                        alt={`Перевернутая карта`}
                        onLoad={onImgLoad}
                    />
                </div>
            </div>
        </div>

    );
};

export default Card;