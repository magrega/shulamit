import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import cards from '../../assets/cards.json';
import Loader from '../Loader/Loader';
import './Gallery.css';
import 'animate.css';


export interface ICard {
    id: number,
    totem: string,
    letter: string,
    meaning: string,
    element: string,
    symbols: string,
    description: string
}

const Gallery: FC = () => {
    const [imagesLoaded, setImagesLoaded] = useState(0);
    const [loading, setLoading] = useState(true);
    const onImgLoad = () => setImagesLoaded(prev => prev + 1);

    // eslint-disable-next-line
    useEffect(() => { if (imagesLoaded === 22) setLoading(false); }, [imagesLoaded]);

    return (
        <>
            {loading && <Loader />}
            <div className="gallery-container" style={{ display: loading ? "none" : "flex" }}>
                {cards.map((card: ICard) =>
                    <Link key={card.id} style={{ display: 'contents' }} to={`/card/${card.id}`}>
                        <div className='gallery-item'key={card.id}>
                            <div className="gallery-item__inner no-rotate">
                                <div className="gallery-item__front">
                                    <img
                                        className="gallery-item__pic"
                                        src={require(`../../assets/img/${card.id}.webp`)}
                                        alt={`${card.totem}`}
                                        onLoad={onImgLoad} />
                                </div>
                            </div>
                        </div>
                    </Link>
                )}
            </div>
        </>
    );
};

export default Gallery;