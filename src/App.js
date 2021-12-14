import React from "react";
import './App.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Map from "./Map";
function App() {
  return (
    <div className="App">
     
     <Map> </Map>
     {/* <MapContainer id="map" center={[32.0853, 34.7818]} zoom={13} scrollWheelZoom={false} >
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[32.0853, 34.7818]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer> */}
    </div>
  );
}

export default App;
