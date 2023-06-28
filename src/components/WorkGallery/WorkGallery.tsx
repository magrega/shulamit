import { FC, useEffect, useState } from 'react';
import cards from '../../assets/cards.json';
import Loader from '../Loader/Loader';
import 'animate.css';
import { Link } from 'react-router-dom';

export type TCard = {
    id: number,
    totem: string,
    letter: string,
    meaning: string,
    element: string,
    symbols: string,
    description: string
}

const WorkGallery: FC = () => {
    const [shuffle, setShuffle] = useState(true);

    const handleShuffle = () => {
        setShuffle(false);
        setCardsArray(shuffleCards(cardsArray));
    }

    const [imagesLoaded, setImagesLoaded] = useState(0);
    const [loading, setLoading] = useState(true);
    const onLoad = () => setImagesLoaded(prev => prev + 1);

    const shuffleCards = (array: TCard[]) => {
        const tempArray = [...array];
        for (let i = tempArray.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [tempArray[i], tempArray[j]] = [tempArray[j], tempArray[i]];
        }
        return tempArray;
    }

    const [cardsArray, setCardsArray] = useState([...cards]);

    useEffect(() => {
        if (imagesLoaded === cardsArray.length * 2) setLoading(false);
        // eslint-disable-next-line
    }, [imagesLoaded]);

    useEffect(() => {
        setCardsArray(shuffleCards(cardsArray));
        // eslint-disable-next-line
    }, []);

    return (
        <>
            {loading && <Loader />}
            <div className="gallery-container" style={{ display: loading ? "none" : "flex" }}>
                {cardsArray.map((card: TCard) =>
                    <div className={`${shuffle ? 'gallery-item' : 'gallery-item animate__animated animate__shakeX'}`} key={card.id}>
                        <div className='gallery-item__inner'>
                            <div className="gallery-item__front">
                                <img
                                    className='gallery-item__pic'
                                    src={require(`../../assets/img/cardBack.webp`)}
                                    alt={`Перевернутая карта`}
                                    onLoad={onLoad} />
                            </div>
                            <div className="gallery-item__back">
                                <img
                                    className="gallery-item__pic"
                                    src={require(`../../assets/img/${card.id}.webp`)}
                                    alt={`${card.totem}`}
                                    onLoad={onLoad}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <button className="shuffle-cards">
                <img key={23}
                    className='gallery-item__shuffle-img'
                    src={require(`../../assets/icons/shuffle.png`)}
                    alt={`Перемешать карты`}
                    onClick={handleShuffle} />
            </button>
        </>
    );
};

export default WorkGallery;