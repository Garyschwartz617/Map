import { SemiCircle } from 'react-leaflet-semicircle';
import { useState,  useCallback, useMemo, useEffect} from "react";
import { Popup,useMapEvents ,useMap,LayerGroup} from 'react-leaflet'
import React from "react";


function Sensor({center , ans , info, sensid}) {
    // let center = [32.08, 34.78]
    const semiCircleRef = React.useRef();
    const [draggable, setDraggable] = useState(false)
    const [position, setPosition] = useState([center[0].lat, center[0].lng])
    const [place,setPlace] = useState()
    const [radius, setRadius] = useState(100)
    // const [startAngle, setStartAngle] = useState(center[1])
    // const [stopAngle, setStopAngle] = useState(center[2])

    const eventHandlers = useMemo(
        () => ({
            dragend() {
            const marker = semiCircleRef.current
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


    // const mapi = useMap()


    useEffect(() => {
        if(info != null){
            // if (info[2] == info[1]){
            //     if (info[0] = sensid){
            //     semiCircleRef.current.remove()
            //     }
            // } 
          if (info[0] == sensid){
                semiCircleRef.current.setStartAngle(info[1]);
                semiCircleRef.current.setStopAngle(info[2]);
                if(info[3]){
                    semiCircleRef.current.setRadius(info[3]);
                }
            }   
        }
      });

      
        
        // return (  <button id='hello' className='rem' >remove</button>
        // )

        // function clearMap() {
        //     const semi = semiCircleRef.current.leafletElement;
        //     // map.eachLayer(function (layer) {
        //     //   map.removeLayer(layer);
        //     // });
        //   }


    return (
        <LayerGroup >
        <SemiCircle
        draggable={draggable}
        eventHandlers={eventHandlers}
        position={position}
        ref={semiCircleRef}
        radius={radius}
        startAngle={center[1]}
        stopAngle={center[2]}
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
      </LayerGroup>
    )
   
}


export default Sensor ;

