import { FC, useEffect, useState } from 'react';
import cards from '../../assets/cards.json';
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
        const tempArray = [...array];
        for (let i = tempArray.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [tempArray[i], tempArray[j]] = [tempArray[j], tempArray[i]];
        }
        console.log('shuffled');
        return tempArray;
    }

    const [cardsArray, setCardsArray] = useState([...cards]);

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
        if (imagesLoaded === cardsArray.length) setLoading(false);
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
                {cardsArray.map((card: TCard) => <img key={card.id} src={require(`../../assets/img/cardBack.webp`)} alt={`${card.totem}`} className="gallery-item" onClick={() => showImage(card.id)} onLoad={onLoad} />)}
            </div>
            <CardModal open={openModalCard} handleClose={handleClose} content={cardsArray[imageNum]} />
        </>
    );
};

export default WorkGallery;