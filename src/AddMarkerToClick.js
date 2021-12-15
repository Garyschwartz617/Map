import {  Marker, useMapEvents, } from 'react-leaflet'
import { useState} from "react";
import Dragable from './Dragable';


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
        // {const [a,b,c,d] = Dragable(marker)}

        <>
      {/* <Marker {a} {b} {c} {d}  ></Marker> */}


         <Dragable Makr= {Marker}center={marker}>

         </Dragable>
    
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

