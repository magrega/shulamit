import 'animate.css';
import { FC, useEffect, useState } from 'react';
import cards from '../../assets/cards.json';
import Loader from '../Loader/Loader';

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

    const shuffleCards = (cardsArray: TCard[]) => {
        setCardsArray(shuffleArray(cardsArray));
    }

    const addShuffle = () => {
        document.querySelector('.gallery-container')?.classList.add('animate__shakeX');
        document.querySelectorAll('.gallery-item__inner')?.forEach(item => item.classList.add('no-rotate'));
        shuffleCards(cardsArray);
    }

    const removeShuffle = () => {
        document.querySelector('.gallery-container')?.classList.remove('animate__shakeX');
        document.querySelectorAll('.gallery-item__inner')?.forEach(item => item.classList.remove('no-rotate'));
    }

    const [imagesLoaded, setImagesLoaded] = useState(0);
    const [loading, setLoading] = useState(true);
    const onLoad = () => setImagesLoaded(prev => prev + 1);

    const shuffleArray = (array: TCard[]) => {
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
    
    // eslint-disable-next-line
    useEffect(() => shuffleCards(cardsArray), []);

    return (
        <>
            {loading && <Loader />}
            <div
                className='gallery-container animate__animated'
                style={{ display: loading ? "none" : "flex" }}
                onAnimationEnd={removeShuffle}
            >
                {cardsArray.map((card: TCard) =>
                    <div className='gallery-item' key={card.id}>
                        <div className='gallery-item__inner'>
                            <div className="gallery-item__front">
                                <img draggable={false}
                                    className='gallery-item__pic'
                                    src={require(`../../assets/img/cardBack.webp`)}
                                    alt={`Перевернутая карта`}
                                    onLoad={onLoad} />
                            </div>
                            <div className="gallery-item__back">
                                <img draggable={false}
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
                    onClick={addShuffle} />
            </button>
        </>
    );
};

export default WorkGallery;