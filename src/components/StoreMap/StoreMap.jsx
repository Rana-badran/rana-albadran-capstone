import React from "react";
import { MapContainer } from "react-leaflet/MapContainer";
import L from "leaflet";
// import { TileLayer } from "react-leaflet/TileLayer";
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
    <MapContainer
      style={{ height: 500 }}
      center={[43.6532, -79.3832]}
      zoom={12}
      scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {data.map((store) => (
        <Marker
          icon={DefaultIcon}
          key={store.id}
          position={[store.latitude, store.longitude]}>
          {/* position={[43.6489513, -79.4290346]} */}
          <Popup>
            testing. <br /> Easily customizable.
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default StoreMap;
