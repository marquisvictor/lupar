import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoidmlyZWtzIiwiYSI6ImNsbDAwcG8xNDFxa3AzbW1hMnNyM3gwNXYifQ.fjhylwF_ayrfb2I0ymjNFg";

function Map() {
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      zoom: 12.22,
      center: [3.394317, 6.567252],
      style: "mapbox://styles/mapbox/dark-v11",
    });

    map.on("load", () => {
      map.addSource("tileset_data", {
        type: "vector",
        url: "mapbox://vireks.72lx880c",
      });

      map.addLayer(
        {
          id: "vireks.72lx880c",
          type: "line",
          source: "tileset_data",
          "source-layer": "lupar_road-2cal1w",
          layout: {
            "line-join": "round",
            "line-cap": "round",
          },
          paint: {
            "line-color": "#ff7474",
            "line-width": 1,
          },
        },
        "road-label-simple" // Add layer below labels
      );
    });

    return () => map.remove();
  }, []);

  return (
    <div className="map-container">
      <div ref={mapContainer} className="map" />
    </div>
  );
}

export default Map;
