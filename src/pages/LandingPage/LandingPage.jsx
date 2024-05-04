import "./LandingPage.scss";
import { Link } from "react-router-dom";
import PeacockImg from "../../assets/images/PeacockImg.png";
const LandingPage = () => {
  return (
    <>
      <div className="landing-container">
        <div className="landing-box">
          <h1 className="landing-box__title">Past Time's Treasures</h1>
          <Link to="/stores">
            <h2 className="landing-box__link">Enter Site</h2>
          </Link>
        </div>
        <div className="landing-box__img">
          <img className="landing-box__img-src" src={PeacockImg} />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
