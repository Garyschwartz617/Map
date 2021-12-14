import { useState, useRef, useMemo, useCallback} from "react";
import { Marker, Popup, useMapEvents } from 'react-leaflet'
import { DragEventHandler } from "react";

function DraggableMarker() {
    const [draggable, setDraggable] = useState(false)
    const [positions, setPositions] = useState([])
    const markerRef = useRef(null)

    const map = useMapEvents({
          click(e) {
            const newPosition = e.latlng
            setPositions(prev => [...prev, newPosition]);
            console.log(newPosition)
          },
        })
        

    const eventHandlers = useMemo(
    () => ({
        dragend() {   
        const marker = markerRef.current
        if (marker != null) {
            setPositions(prev => [...prev,marker.getLatLng()])
        }
        },
    }),
    [],
    )
    const toggleDraggable = useCallback(() => {
    setDraggable((d) => !d)
    }, [])

    return (
        <>
        {positions.map(position => 
    <Marker
        draggable={draggable}
        eventHandlers={eventHandlers}
        position={position}
        ref={markerRef}>
        <Popup minWidth={90}>
        <span onClick={toggleDraggable}>
            {draggable
            ? 'Marker is draggable'
            : 'Click here to make marker draggable'}
        </span>
        </Popup>
    </Marker>
    )}
     </>
    )
   
}


export default DraggableMarker;