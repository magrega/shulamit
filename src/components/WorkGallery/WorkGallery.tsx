import { FC, useEffect, useState } from 'react';
import cards from '../../assets/cards.json';
import Loader from '../Loader/Loader';
import 'animate.css';
// import './WorkGallery.css';
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
    const [cardsArray, setCardsArray] = useState([...cards]);

    const [shuffle, setShuffle] = useState(false);

    const handleShuffle = () => setShuffle(current => !current);


    const [imagesLoaded, setImagesLoaded] = useState(0);
    const [loading, setLoading] = useState(true);
    const onLoad = () => setImagesLoaded(prev => prev + 1);

    const shuffleCards = (array: TCard[]) => {
        const tempArray = [...array];
        for (let i = tempArray.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [tempArray[i], tempArray[j]] = [tempArray[j], tempArray[i]];
        }
        setShuffle(false);
        return tempArray;
    }

    useEffect(() => {
        if (imagesLoaded === cardsArray.length) setLoading(false);
        // eslint-disable-next-line
    }, [imagesLoaded]);

    useEffect(() => {
        setCardsArray(shuffleCards(cardsArray));
        // eslint-disable-next-line
    }, [shuffle]);

    return (
        <>
            {loading && <Loader />}
            <div className="gallery-container" style={{ display: loading ? "none" : "flex" }}>
                {cardsArray.map((card: TCard) =>
                    <Link key={card.id} style={{ display: 'contents' }} to={`/card/${card.id}`}>
                        <img key={card.id}
                            className={`${shuffle ? 'gallery-item' : 'gallery-item animate__animated animate__shakeX'}`}
                            src={require(`../../assets/img/cardBack.webp`)}
                            alt={`Перевернутая карта`}
                            onLoad={onLoad} />
                    </Link>
                )}
                <img key={23}
                    className="gallery-item shuffle-cards"
                    src={require(`../../assets/img/shuffle.png`)}
                    alt={`Перемешать карты`}
                    onClick={handleShuffle} />
            </div>
        </>
    );
};

export default WorkGallery;