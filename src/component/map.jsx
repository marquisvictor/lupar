import { useEffect, useRef } from "react"
import mapboxgl from '!mapbox-gl'
mapboxgl.accessToken = 'pk.eyJ1IjoidmlyZWtzIiwiYSI6ImNsbDAwcG8xNDFxa3AzbW1hMnNyM3gwNXYifQ.fjhylwF_ayrfb2I0ymjNFg'

function Map() {
    const mapContainer = useRef(null)
    useEffect(() => { 
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            zoom: 1.5,
            center: [5,34],
            style: 'mapbox://styles/mapbox/streets-v11'

        })
        return () => map.remove()
    }, [])
  return (
    <div>
        <div ref={mapContainer} className="map-container">
            
        </div>
    </div>
  )
}

export default Map
