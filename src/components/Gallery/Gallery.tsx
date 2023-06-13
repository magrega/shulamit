import { FC, useEffect, useState } from 'react';
import cards from '../../assets/cards.json';
import CardModal from '../CardModal/CardModal';
import Loader from '../Loader/Loader';
import './Gallery.css';

export type TCard = {
    id: number,
    totem: string,
    letter: string,
    meaning: string,
    element: string,
    symbols: string,
    description: string
}

const Gallery: FC = () => {
    const [openModalCard, setOpenModalCard] = useState(false);
    const handleOpen = () => setOpenModalCard(true);
    const handleClose = () => setOpenModalCard(false);

    const [imagesLoaded, setImagesLoaded] = useState(0);
    const [loading, setLoading] = useState(true);
    const onLoad = () => setImagesLoaded(prev => prev + 1);

    const [imageNum, setImageNum] = useState(0);

    const showImage = (index: number) => {
        setImageNum(index);
        handleOpen();
    }

    useEffect(() => {
        if (imagesLoaded === cards.length) setLoading(false);
        // eslint-disable-next-line
    }, [imagesLoaded]);
  
    return (
        <>
            {loading && <Loader />}
            <div className="gallery-container" style={{ display: loading ? "none" : "flex" }}>
                {cards.map((card: TCard) => <img key={card.id} src={require(`../../assets/img/${card.id}.webp`)} alt={`${card.totem}`} className="gallery-item" onClick={() => showImage(card.id)} onLoad={onLoad} />)}
            </div>
            <CardModal open={openModalCard} handleClose={handleClose} content={cards[imageNum]} />
        </>
    );
};

export default Gallery;