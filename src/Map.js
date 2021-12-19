import { useState,useEffect} from "react";
import { MapContainer, TileLayer, useMapEvents, LayersControl ,useMap} from 'react-leaflet'
import './App.css';
import AddToClick from "./AddToClick";
import Sensor from "./Sensor";
import curr from "./CurrentCoordinates"
const Map = () => {

    const [lat, setLat] = useState(32.0853);
    const [lng, setLng] = useState(34.7818);
    const [latit, setLatit] = useState(32.0853);
    const [langi, setLangi] = useState(34.7818);
    let domain = ["mt0", "mt1", "mt2", "mt3"]

    const [bool, setBool] = useState(true);

    const handleClick = () => {
        {bool ? setBool(false) : setBool(true)}
    }    
    

    function MyComponent() {
        const map = useMapEvents({
          dragend: (e) => {
            setLatit(e.target.getCenter()['lat'])
            setLangi(e.target.getCenter()['lng'])
          }
        });
        return null;
      }

      const [angleId, setAngleId] = useState(0)
      const [radi, setRadi] = useState(20)
      const [strt, setStart] = useState(90)
      const [end, setEnd] = useState(180)
      const [angleInfo, setAngleInfo] = useState(null)
      const editAngle = (e) => {
        e.preventDefault();
      // console.log(strt,end,angleId)
      console.log('inmap')
      setAngleInfo([angleId,strt,end,radi])

  
    }
  
    useEffect(() => {
      });

      return (
        <div>
        <MapContainer id="map" center={[lat, lng]} zoom={13} scrollWheelZoom={false} >
            <LayersControl position="topright"> 
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
       <LayersControl.BaseLayer checked name="GoogleMap.Hybrid">
        <TileLayer
          attribution='&copy; <a href="https://maps.google.com/">GoogleMaps</a>" '
          url="http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}"
          subdomains= {domain}
        />
      </LayersControl.BaseLayer>
        </LayersControl>
        <AddToClick answer = {bool} inf={angleInfo}/>
        <MyComponent />
        {/* <Sensor /> */}
      </MapContainer>
      <button id='hello' className='bttn' onClick={handleClick}>{bool ? 'Change to Marker' : 'Change to Vector'}</button>

      <div className='coordinates'>Lattitude-{latit} , Longitude-{langi}</div>  
      <form  className='btt' >
                <label >Which ID?</label>
                <input 
                type="text" 
                required
                // value='input id number'
                onChange={(e) => setAngleId(e.target.value)}
                />
                <input 
                type="text" 
                required
                // value='Angle to start at'
                onChange={(e) => setStart(e.target.value)}
                />
                <input 
                type="text" 
                required
                // value='Angle to end at'
                onChange={(e) => setEnd(e.target.value)}
                />
                    <input 
                type="text" 
                required
                // value='Angle to end at'
                onChange={(e) => setRadi(e.target.value)}
                />
                <button onClick={editAngle}></button>
            </form>
      </div>
    );
}

export default Map;

