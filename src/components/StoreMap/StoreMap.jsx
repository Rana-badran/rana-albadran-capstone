import "./storeMap.scss";
import React from "react";
import CompassImg from "../../assets/images/CompassImg.png";
import { Link } from "react-router-dom";
import { MapContainer } from "react-leaflet/MapContainer";
import L from "leaflet";
import { useMap } from "react-leaflet/hooks";
import { TileLayer, Marker, Popup } from "react-leaflet";
import MapMarker from "../../assets/images/MapMarker.svg.png";
import "leaflet/dist/leaflet.css";

let DefaultIcon = L.icon({
  iconUrl: MapMarker,
  iconSize: [30, 30],
});

const StoreMap = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className="map-main">
        <MapContainer
          className="map-container"
          style={{ height: 500 }}
          center={[43.6532, -79.3832]}
          zoom={12}
          scrollWheelZoom={false}>
          <TileLayer
            className="map-container__tile"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {data.map((store) => (
            <Marker
              icon={DefaultIcon}
              key={store.id}
              position={[store.latitude, store.longitude]}>
              <Popup
                style={{ width: "fit-content" }}
                className="map-container__popup">
                {store.name} <br /> {store.address}{" "}
                <Link to={store.media}>{store.media}</Link>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
        <div className="img-section">
          <img className="img-section__img" src={CompassImg} />
        </div>
      </div>
    </>
  );
};

export default StoreMap;
