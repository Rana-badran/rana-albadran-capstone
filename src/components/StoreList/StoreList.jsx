import "./storelist.scss";
import OilLampImg from "../../assets/images/OilLampImg.png";
import Gramophone from "../../assets/images/Gramophone.png";

const StoreList = ({ data, onOpenClick }) => {
  return (
    <>
      <div className="main-container">
        <div className="img-box">
          <img className="img-box__img" src={Gramophone} />
        </div>
        <div className="list-container">
          <h2 className="list-container__title">List of Stores</h2>
          <ul className="list-container__list">
            {data.map((store) => (
              <li
                className="list-container__items"
                key={store.id}
                onClick={() => onOpenClick(store)}>
                {store.name}{" "}
              </li>
            ))}
          </ul>
        </div>
        <div className="img-container">
          <img className="img-container__img" src={OilLampImg} />
        </div>
      </div>
    </>
  );
};

export default StoreList;
