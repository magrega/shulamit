import { Backdrop, Box, Fade, Modal } from '@mui/material';
import { FC, useState } from 'react';
import { TCard } from '../Gallery/Gallery';
import './CardModal.css';

interface ICardModal {
    open: boolean;
    content: TCard,
    handleClose: () => void;
}

const CardModal: FC<ICardModal> = ({ open, content, handleClose }) => {

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
            >
                <Fade in={open}>
                    <Box className='cardmodal'>
                        <button type="button" className="cardmodal__closebtn" onClick={handleClose}>
                            <span className='cardmodal__closebtn-item'></span>
                            <span className='cardmodal__closebtn-item'></span>
                        </button>
                        <div className="cardmodal__body">
                            <video className="cardmodal__card-vid" poster={require(`../../assets/img/${content.id}.webp`)} autoPlay={true} loop={true} playsInline={true} controls={true} src={require(`../../assets/video/${content.id}.mp4`)} />
                            <div id="transition-modal-description" className='cardmodal__card-text'>
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