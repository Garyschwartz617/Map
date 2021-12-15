import { useState, useRef, useMemo, useCallback} from "react";
import { Popup } from 'react-leaflet'


  
  function Draggable({Makr,center}) {
    
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
  
    // return ([draggable={draggable},
    //         eventHandlers={eventHandlers},
    //         position={position},
    //         ref={markerRef}])
    return (
      <Makr
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
      </Makr>
    )
  }
  
  export default Draggable;