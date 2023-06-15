import { Backdrop, Box, Fade, Modal, Skeleton } from '@mui/material';
import { FC, useState, useEffect } from 'react';
import { TCard } from '../Gallery/Gallery';
import './CardModal.css';

interface ICardModal {
    open: boolean;
    content: TCard,
    handleClose: () => void;
}

const CardModal: FC<ICardModal> = ({ open, content, handleClose }) => {

    const [isSkeleton, setIsSkeleton] = useState(true);

    const handleSkeleton = () => {
        setIsSkeleton(false);
        console.log('can play');
    }

    const closeModal = () => {
        handleClose();
        setIsSkeleton(true);
    }

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={closeModal}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box className='cardmodal'>
                        <button type="button" className="cardmodal__closebtn" onClick={closeModal}>
                            <span className='cardmodal__closebtn-item'></span>
                            <span className='cardmodal__closebtn-item'></span>
                        </button>
                        <div className="cardmodal__body">
                            {isSkeleton && <Skeleton className="skeleton-modal cardmodal__card-vid" />}
                            <video style={{ display: isSkeleton ? 'none' : 'inline' }} className="cardmodal__card-vid" onCanPlay={handleSkeleton} autoPlay={true} loop={true} playsInline={true} controls={true} src={require(`../../assets/video/${content.id}.mp4`)} />
                            {/* <video className="cardmodal__card-vid" autoPlay={true} loop={true} playsInline={true} controls={true} src={require(`../../assets/video/${content.id}.mp4`)} /> */}
                            <div id="transition-modal-description" className='transition-modal-description'>
                                <p className='cardmodal__p' >{`Тотем силы: ${content.totem}`}</p>
                                <p className='cardmodal__p' >{`Буква Иврита: ${content.letter}`}</p>
                                <p className='cardmodal__p' >{`Значение: ${content.meaning}`}</p>
                                <p className='cardmodal__p' >{`Элемент: ${content.element}`}</p>
                                <p className='cardmodal__p' >{`Символы: ${content.symbols}`}</p>
                                <p className='cardmodal__p' >{`Описание: ${content.description}`}</p>
                            </div>
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}

export default CardModal;