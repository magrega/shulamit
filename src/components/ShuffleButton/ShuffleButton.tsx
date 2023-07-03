import { FC } from 'react';
import './ShuffleButton.css';

interface IShuffleButton {
    addShuffle: () => void;
}

const ShuffleButton: FC<IShuffleButton> = ({ addShuffle }) => {
    return (
        <button className="shuffle-cards">
            <img key={23}
                draggable={false}
                className='gallery-item__shuffle-img'
                src={require(`../../assets/icons/shuffle.png`)}
                alt={`Перемешать карты`}
                onClick={addShuffle} />
        </button>
    );
};

export default ShuffleButton;