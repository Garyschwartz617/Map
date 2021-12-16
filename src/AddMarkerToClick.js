import {  useMapEvents, } from 'react-leaflet'
import { useState, useEffect} from "react";
import Draggable from './Draggable';
import Sensor from './Sensor';
import './App.css';

function AddMarkerToClick({answer ,inf}) {

    const [markers, setMarkers] = useState([]);
    const [sensors, setSensors] = useState([]);
    // const [sensersOn,setSensorsOn] = useState(answer)

    const map = useMapEvents({
      click(e) {
        // {sensersOn ? setSensors(prev =>[...prev,e.latlng]): setMarkers(prev => [...prev, e.latlng])}
        if (answer){
          const newSensor = [e.latlng,300,90]
          setSensors(prev =>[...prev, newSensor]);
          console.log(sensors)
        }else {
          const newMarker = e.latlng
          setMarkers([...markers, newMarker]);
          console.log('marker')
        }  
      },
    })

    useEffect(() => {
    });
    // const greenOptions = { color: 'green', fillColor: 'green' }
    return (
      <>
      
        {markers.map((marker, i) => 
         <Draggable key= {i} center={marker} ans={answer}>
         </Draggable>
        )}
       
         {sensors.map((sensor, i) => 
         <Sensor key= {i} center={sensor} info={inf} sensid={i}>
           {/* {console.log('in the map')} */}
         </Sensor>
        )}
       
      </>
    )
  }

  export default AddMarkerToClick;  

