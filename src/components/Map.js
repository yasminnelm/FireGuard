import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import LocationMarker from "./LocationMarker";
import LocationInfoBox from "./LocationInfoBox";

const NATURAL_EVENT_WILDFIRE = 8;

const Map = ({ center, zoom, eventData }) => {
  const [locationInfo, setLocationInfo] = useState(null);

  useEffect(() => {
    console.log("Event Data:", eventData); 
  }, [eventData]);
   const markers = eventData.map((event, key) => {
    if (event.categories[0].id === NATURAL_EVENT_WILDFIRE) {
       const [lng, lat] = event.geometries[0].coordinates;
     return (
      <LocationMarker key={key} lng={lng} lat={lat} info= 
       {event.title} 
       onClick={() => setLocationInfo({ id: event.id, title: event.title })}
       />
     );
   }
 });
 useEffect(() => {
  console.log("Markers:", markers); // Log markers to check their content
}, [markers]);


 return (
    <MapContainer style={{ height: "100vh"}} center={center} 
        zoom={zoom}>
       <TileLayer
         attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
       url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
      />
     {markers}
     {locationInfo && <LocationInfoBox info={locationInfo} />}
     
   </MapContainer>
 );
};

Map.defaultProps = {
   center: [42.3265, -122.8756],
   zoom: 6,
};

export default Map;