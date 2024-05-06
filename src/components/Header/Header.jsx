import "./header.scss";
import BottleImg from "../../assets/images/BottleImg.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <img className="header-container__img" src={BottleImg} />
      <Link className="header-container__link" to="/">
        <h3 className="header-container__title">Past Time's Treasures</h3>
      </Link>
    </div>
  );
};

export default Header;
