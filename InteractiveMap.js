import React from 'react';
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import L from "leaflet";
import markericonn from "./markericonn.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";


const InteractiveMap = ({ onMapClick }) => {
  const handleMapClick = (e) => {
    // Get the latitude and longitude of the clicked point
    const { lat, lng } = e.latlng;
    onMapClick({ lat, lng });
  };
 /* let markerIcon = L.icon({
    iconUrl: markericonn,
    shadowUrl: iconShadow,
    iconSize: [32, 32],
    shadowSize: [28, 28],
  });
  
  L.Marker.prototype.options.icon = markerIcon;*/
 
  return (
    <div>
    <MapContainer center={[0, 0]} zoom={3} onClick={handleMapClick}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    

      
    </MapContainer>
    </div>
  );
};

export default InteractiveMap;