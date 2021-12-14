import {  Marker, useMapEvents, } from 'react-leaflet'
import { useState} from "react";
import Draggable from './Dragable';


function AddMarkerToClick() {

    const [markers, setMarkers] = useState([]);
  
    const map = useMapEvents({
      click(e) {
        const newMarker = e.latlng
        setMarkers([...markers, newMarker]);
        console.log(newMarker)
      },
    })
    const greenOptions = { color: 'green', fillColor: 'green' }

    return (
      <>
        {markers.map(marker => 
        <>
         <Draggable Makr= {Marker}center={marker}>

         </Draggable>
    
          {/* <Marker key={marker} 
          position={marker}
          >
          <Popup>Marker is at {marker.lat}
          </Popup>
            <Circle
            center={marker}
            pathOptions={greenOptions}
            radius={100}
          />
          </Marker> */}
          </>
        )}
      </>
    )
  }

  export default AddMarkerToClick;  

