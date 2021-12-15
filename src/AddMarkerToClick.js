import {  useMapEvents, } from 'react-leaflet'
import { useState, useEffect} from "react";
import Draggable from './Draggable';
import Sensor from './Sensor';

function AddMarkerToClick({answer}) {

    const [markers, setMarkers] = useState([]);
    const [sensors, setSensors] = useState([]);
    const [sensersOn,setSensorsOn] = useState(answer)
    
    const map = useMapEvents({
      click(e) {
        // {sensersOn ? setSensors(prev =>[...prev,e.latlng]): setMarkers(prev => [...prev, e.latlng])}
        if (sensersOn){
          const newSensor = e.latlng
          setSensors(prev =>[...prev, newSensor]);
        }else {
          const newMarker = e.latlng
          setMarkers([...markers, newMarker]);

          // console.log(newMarker)
        }  
      },
    })

    useEffect(() => {
      setSensorsOn(answer)

    });
    // const greenOptions = { color: 'green', fillColor: 'green' }
    return (
      <>
      <>
        {markers.map((marker, i) => 
         <Draggable key= {i} center={marker} ans={sensersOn}>
         </Draggable>
        )}
        </>
        <>
         {sensors.map((sensor, i) => 
         <Sensor key= {i} center={sensor}>
           {/* {console.log('in the map')} */}
         </Sensor>
        )}
        </>
      </>
    )
  }

  export default AddMarkerToClick;  

