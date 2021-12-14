import { useState,useEffect} from "react";
import { MapContainer, TileLayer, useMapEvents, Polygon, LayersControl } from 'react-leaflet'
import './App.css';
import AddMarkerToClick from "./AddMarkerToClick";
import Mark from "./Mark";
const Map = () => {

    const [lat, setLat] = useState(32.0853);
    const [lng, setLng] = useState(34.7818);
    const [latit, setLatit] = useState(32.0853);
    const [langi, setLangi] = useState(34.7818);
    let domain = ["mt0", "mt1", "mt2", "mt3"]
    // let openstreethref = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    // let openstreeturl =  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

    // let openstreet = ['&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",'']
    // let google1 = ['&copy; <a href="https://maps.google.com/">GoogleMaps</a>" ',"http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}",domain]
    // let google2 = ['&copy; <a href="https://maps.google.com/">GoogleMaps</a>" ',"http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",domain]
    // let google3 = ['&copy; <a href="https://maps.google.com/">GoogleMaps</a>" ',"http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",domain]
    // let google4 = ['&copy; <a href="https://maps.google.com/">GoogleMaps</a>" ',"http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}",domain]

    // const [layer, setLayer] = useState(google1)
 
    // const handleClick = () => {
        
    //     setLayer(google1)
    //     console.log(layer)
    // }        

    function MyComponent() {
        const map = useMapEvents({
          dragend: (e) => {
            setLatit(e.target.getCenter()['lat'])
            setLangi(e.target.getCenter()['lng'])
          }
        });
        return null;
      }

    const polygon = [
        [32.1, 34.7818],
        [32.0853, 34.7918],
        [32.0853, 34.8018],
      ]
    const purpleOptions = { color: 'purple' }  
  
    useEffect(() => {
      });

      return (
        <div>
        <MapContainer id="map" center={[lat, lng]} zoom={13} scrollWheelZoom={false} >
            <LayersControl position="topright"> */}
                <LayersControl.BaseLayer checked name="OpenStreetMap.Mapnik"> 
                    <TileLayer
        
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </LayersControl.BaseLayer>
       <LayersControl.BaseLayer checked name="GoogleMap.Standard">
        <TileLayer
    
          attribution='&copy; <a href="https://maps.google.com/">GoogleMaps</a>" '
          url="http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}"
          subdomains= {domain}
        />
      </LayersControl.BaseLayer> 
      <LayersControl.BaseLayer checked name="GoogleMap.Satelite">
        <TileLayer
          attribution='&copy; <a href="https://maps.google.com/">GoogleMaps</a>" '
          url="http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
          subdomains= {domain}
        />
      </LayersControl.BaseLayer>
       <LayersControl.BaseLayer checked name="GoogleMap.Road">
        <TileLayer
          attribution='&copy; <a href="https://maps.google.com/">GoogleMaps</a>" '
          url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
          subdomains= {domain}
        />
      </LayersControl.BaseLayer>
       <LayersControl.BaseLayer checked name="OpenStreetMap.Hybrid">
        <TileLayer
          attribution='&copy; <a href="https://maps.google.com/">GoogleMaps</a>" '
          url="http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}"
          subdomains= {domain}
        />
      </LayersControl.BaseLayer>
        </LayersControl>
        <AddMarkerToClick />
        <MyComponent />
        {/* <Mark /> */}
        <Polygon pathOptions={purpleOptions} positions={polygon} />
      </MapContainer>
      {/* <button id='hello' className='bttn' onClick={handleClick}>Hello</button> */}
      <div className='coordinates'>Lattitude-{latit} , Longitude-{langi}</div>  
      </div>
    );
}

export default Map;

