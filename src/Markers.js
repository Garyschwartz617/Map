import { useState, useEffect, useRef, useMemo, useCallback} from "react";
import { Popup, Marker, useMap, LayerGroup } from 'react-leaflet'
import  {defaultConverter}  from './converter'
import React from "react";


  
  function Markers({center,info, markId}) {
    
    const [draggable, setDraggable] = useState(false)
    const [position, setPosition] = useState(center)
    const markerRef = useRef(null)

    const eventHandlers = useMemo(
      () => ({
        dragend() {
          const marker = markerRef.current
          if (marker != null) {
            setPosition(marker.getLatLng())
          }
        },
      }),
      [],
    )

    const toggleDraggable = useCallback(() => {
      setDraggable((d) => !d)
    }, [])
    
  
    // let [a,b]=[51.505, -0.09]
    // // console.log(defaultConverter.convertFromLatLng(position.lng,position.lat))
    // let [y,z] = defaultConverter.convertFromLatLng(a,b)
    // let x = defaultConverter.convertToLatLng(y, z)
    // console.log(x)

      const mapi = React.createRef()
      const map = useMap().current
    // useEffect(() => {
    //   if(info != null){
    //       if (info[2] == info[1]){
    //           if (info[0] = markId){
    //             console.log(markerRef.current.id)  
    //             markerRef.current.remove(markerRef.current)
    //           }
    //       } 

    //     // if (info[0] == markId){
    //     //       semiCircleRef.current.setStartAngle(info[1]);
    //     //       semiCircleRef.current.setStopAngle(info[2]);
    //     //       if(info[3]){
    //     //           semiCircleRef.current.setRadius(info[3]);
    //     //       }
    //     //   }
         
    //   }



    // })



    
    return (
      <LayerGroup ref={mapi} >
      <Marker
        draggable={draggable}
        eventHandlers={eventHandlers}
        position={position}
        ref={markerRef}
        >
        <Popup minWidth={90}>
          <span onClick={toggleDraggable}>
            {draggable
              ? 'Marker is draggable'
              : 'Click here to make marker draggable'}
          </span>
        </Popup>
      </Marker>
      </LayerGroup >
    )
  }
  
  export default Markers;