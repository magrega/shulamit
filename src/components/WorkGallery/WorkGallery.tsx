import { FC, useEffect, useState } from 'react';
import cards from '../../assets/randomCards.json';
import CardModal from '../CardModal/CardModal';
import Loader from '../Loader/Loader';
import './WorkGallery.css';

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

    const shuffleCards = (array: TCard[]) => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

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

    useEffect(() => {
        shuffleCards(cards);
    }, []);

    return (
        <>
            {loading && <Loader />}
            <div className="gallery-container" style={{ display: loading ? "none" : "flex" }}>
                {cards.map((card: TCard) => <img key={card.id} src={require(`../../assets/img/cardBack.webp`)} alt={`${card.totem}`} className="gallery-item" onClick={() => showImage(card.id)} onLoad={onLoad} />)}
            </div>
            <CardModal open={openModalCard} handleClose={handleClose} content={cards[imageNum]} />
        </>
    );
};

export default WorkGallery;