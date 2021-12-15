import { useState, useRef, useMemo, useCallback} from "react";
import { Popup, Marker } from 'react-leaflet'
import  {defaultConverter}  from './converter'

  
  function Draggable({center}) {
    
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
    
  
    let [a,b]=[51.505, -0.09]
    // console.log(defaultConverter.convertFromLatLng(position.lng,position.lat))
    let [y,z] = defaultConverter.convertFromLatLng(a,b)
    let x = defaultConverter.convertToLatLng(y, z)
    console.log(x)
    return (
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
    )
  }
  
  export default Draggable;