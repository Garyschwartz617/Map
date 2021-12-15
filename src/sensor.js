import { SemiCircle } from 'react-leaflet-semicircle';
import { useState,  useCallback, useMemo, useEffect} from "react";
import { Popup,useMapEvents } from 'react-leaflet'
import React from "react";



function Sensor({center , ans }) {
    // let center = [32.08, 34.78]
    const semiCircleRef = React.useRef();
    const [draggable, setDraggable] = useState(false)
    const [position, setPosition] = useState([center.lat, center.lng])
    const [place,setPlace] = useState()
    const [radius, setRadius] = useState(100)

    const eventHandlers = useMemo(
        () => ({
            dragend() {
            const marker = semiCircleRef.current
            console.log(marker)
            if (marker != null) {
                setPosition(marker.getLatLng())
            }
            },
        }),
        [],
        )


    const toggleDraggable = useCallback(() => {
      setDraggable((d) => !d)
      const marker = semiCircleRef.current
        setPlace(marker)
    }, [])

    const map = useMapEvents({
        click(e) {
            if(draggable && !ans){
                place.setLatLng(e.latlng)
            }
        //   (draggable ? place.setLatLng(e.latlng): true)
        },
      })

      const deleteme = () => {
        let marker = semiCircleRef.current
        marker = null
        console.log(semiCircleRef)
    }   

    const changeRad = (value) => {
        setRadius(value)
    }   

    useEffect(() => {
   
      });

    return (
        <SemiCircle
        draggable={draggable}
        eventHandlers={eventHandlers}
        position={position}
        ref={semiCircleRef}
        radius={radius}
        startAngle={70}
        stopAngle={180}
        >
        {/* {console.log('in the semi-circle')} */}
        <Popup minWidth={90}>
          <span onClick={toggleDraggable}>
            {draggable
              ? 'Marker is draggable'
              : 'Click here to make marker draggable'}
          </span>
          {/* <span onClick={deleteme}>
            click me to deltele me
          </span> */}

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