import { Spinner } from "react-bootstrap";

const LoadingComp = () => {
  return (
    <div className="loading-icon-container">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default LoadingComp;
