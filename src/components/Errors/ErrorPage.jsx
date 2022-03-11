import { Link } from "react-router-dom";
import computer from "../assets/computer.png";

const ErrorPage = () => {
  return (
    <div>
      <img src={computer} alt="broken computer" className="computer-image" />
      <div className="error-page">
        <h2>We're Sorry</h2>
        <h4>We can't find the page you're looking for</h4>
        <h5>
          <Link to="/" className="link-colour">
            <p className="error-home">Return to Home</p>
          </Link>
        </h5>
      </div>
    </div>
  );
};

export default ErrorPage;
