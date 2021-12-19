import {  useMapEvents, useMap , LayerGroup} from 'react-leaflet'
import { useState, useEffect} from "react";
import Markers from './Markers';
import Sensor from './Sensor';
import './App.css';

function AddToClick({answer ,inf}) {

    const [markers, setMarkers] = useState([]);
    const [sensors, setSensors] = useState([]);
    // const [sensersOn,setSensorsOn] = useState(answer)

    const map = useMapEvents({
      click(e) {
        // {sensersOn ? setSensors(prev =>[...prev,e.latlng]): setMarkers(prev => [...prev, e.latlng])}
        if (answer){
          const newSensor = [e.latlng,300,90]
          setSensors(prev =>[...prev, newSensor]);
          // console.log(Sensor[1])
        // }else if (Sensor[1]){

        } else{
          const newMarker = e.latlng
          setMarkers([...markers, newMarker]);
        }  
      },
    })

    const handleClick = () => {
      if(inf != null){
        if (inf[2] == inf[1]){
           markers.splice([inf[0]],1)
           sensors.splice([inf[0]],1)
        } 
    }


  }    

    useEffect(() => {
      handleClick()
    });

    return (
      <>
      
        {markers.map((marker, i) => 
         <LayerGroup>
         <Markers key= {i} center={marker} ans={answer} info={inf} markId={i}>

         </Markers>
         </LayerGroup>
        )}
       
         {sensors.map((sensor, i) => 
         <LayerGroup>
         <Sensor key= {i} center={sensor} info={inf} sensid={i}>
         </Sensor>
         </LayerGroup>
        )}

      </>
    )
  }

  export default AddToClick;  

