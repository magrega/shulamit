import { ClockLoader } from "react-spinners";
import './Loader.css';

const Loader = () => {
    return (
        <div className="loader-wrapper">
            <ClockLoader color="#e3ba64" />
        </div>
    );
};

export default Loader;