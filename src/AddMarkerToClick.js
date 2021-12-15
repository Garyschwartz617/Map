import {  Marker, useMapEvents, } from 'react-leaflet'
import { useState, useEffect} from "react";
import Draggable from './Draggable';
import Sensor from './Sensor';

function AddMarkerToClick() {

    const [markers, setMarkers] = useState([]);
    const [sensors, setSensors] = useState([]);
    const [sensersOn,setSensorsOn] = useState(true)
    
    const map = useMapEvents({
      click(e) {
        {sensersOn ? setSensors(prev =>[...prev,e.latlng]): setMarkers(prev => [...prev, e.latlng])}
        // if (sensersOn){
        //   console.log('1st')
        //   const newSensor = e.latlng
        //   console.log('2nd')
        //   setSensors(prev =>[...prev, newSensor]);
        //   console.log('3rd')
        // }else {
        //   const newMarker = e.latlng
        //   setMarkers([...markers, newMarker]);

        //   // console.log(newMarker)
        // }  
      },
    })

    useEffect(() => {
      console.log(markers)

    });
    // const greenOptions = { color: 'green', fillColor: 'green' }
    return (
      <>
      <>
        {markers.map(marker => 
         <Draggable center={marker}>
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

