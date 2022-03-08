import { Link } from "react-router-dom";
import computer from "../assets/computer.png";

const ErrorComponent = ({ error }) => {
  const {
    err: {
      response: { status, data },
    },
  } = error;

  return (
    <div>
      <img src={computer} alt="broken computer" className="computer-image" />
      <div className="error-page">
        <h2>Status: {status}</h2>
        <h4>{data.msg}</h4>
        <h5>
          <Link to="/" className="link-colour">
            Return to Home
          </Link>
        </h5>
      </div>
    </div>
  );
};

export default ErrorComponent;
