import Error from "./Error";
import Loader from "./Loader";

const Overlay = ({ isLoading = false, isError = false }) => {
  return (
    <>
      {isLoading && <Loader />}
      {isError && <Error />}
    </>
  );
};

export default Overlay;
