import { SemiCircle, SemiCircleMarker } from 'react-leaflet-semicircle';
import { useState, useRef, useMemo, useCallback} from "react";
import { Popup,useMapEvents } from 'react-leaflet'
import React from "react";



function Sensor() {
    let center = [32.0853, 34.7818]
    const semiCircleRef = React.useRef();
    const [draggable, setDraggable] = useState(false)
    const [position, setPosition] = useState(center)
    const markerRef = useRef(null)
    const [place,setPlace] = useState()
    // const eventHandlers = useMemo(
    //   () => ({
    //     dragend() {
    //       const marker = semiCircleRef.current
    //       console.log(marker)
    //       if (marker != null) {
    //         setPosition(marker.getLatLng())
    //       }
    //     },
    //   }),
    //   [],
    // )
    const toggleDraggable = useCallback(() => {
      setDraggable((d) => !d)
      const marker = semiCircleRef.current
    //   console.log(marker.setLatLng([32.09, 34.79]))
        setPlace(marker)
    }, [])

    const map = useMapEvents({
        click(e) {
        //   fix me here!!!!
          (draggable ? place.setLatLng(e.latlng): console.log('cant move buster'))
        },
      })

    return (
        <SemiCircle
        draggable={draggable}
        // eventHandlers={eventHandlers}
        position={position}
        ref={semiCircleRef}
        radius={100}
        startAngle={70}
        stopAngle={180}
        >
        <Popup minWidth={90}>
          <span onClick={toggleDraggable}>
            {draggable
              ? 'Marker is draggable'
              : 'Click here to make marker draggable'}
          </span>
        </Popup>
      </SemiCircle>
    )
   
}


export default Sensor;




  
//   function Draggable({Makr,center}) {
    
  
//     return (
//       <Makr
//         draggable={draggable}
//         eventHandlers={eventHandlers}
//         position={position}
//         ref={markerRef}
//         >
//         <Popup minWidth={90}>
//           <span onClick={toggleDraggable}>
//             {draggable
//               ? 'Marker is draggable'
//               : 'Click here to make marker draggable'}
//           </span>
//         </Popup>
//       </Makr>
//     )
//   }
  
//   export default Draggable;