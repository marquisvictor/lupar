import axios from "axios";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import React, { useEffect, useRef } from "react";

mapboxgl.accessToken =
  "pk.eyJ1IjoidmlyZWtzIiwiYSI6ImNsbDAwcG8xNDFxa3AzbW1hMnNyM3gwNXYifQ.fjhylwF_ayrfb2I0ymjNFg";

function Map({ data, getLocation, getSnapshot }) {
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      zoom: 12.22,
      center: [3.394317, 6.567252],
      // style: "mapbox://styles/mapbox/streets-v11",
      style: "mapbox://styles/mapbox/dark-v11",
      preserveDrawingBuffer: true,
    });

    map.on("load", () => {
      map.addSource("tileset_data", {
        type: "vector",
        url: "mapbox://vireks.72lx880c",
      });

      map.addLayer({
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
      });

      map.addSource("tileset_building", {
        type: "vector",
        url: "mapbox://vireks.4c9ox27n",
      });

      map.addLayer({
        id: "vireks.4c9ox27n",
        type: "fill",
        source: "tileset_building",
        "source-layer": "lupar_wgs84-bmk1zc",
        paint: {
          "fill-color": "#9ce698",
        },
      });

      map.on("click", (e) => {
        const lat = e.lngLat.lat;
        const long = e.lngLat.lng;

        console.log(`User clicked Latitude ${lat} and Longitude ${long}`);

        axios
          .get(
            `https://api.mapbox.com/v4/vireks.4c9ox27n/tilequery/${long},${lat}.json?radius=50&limit=50&dedupe&access_token=pk.eyJ1IjoidmlyZWtzIiwiYSI6ImNsbDAwcG8xNDFxa3AzbW1hMnNyM3gwNXYifQ.fjhylwF_ayrfb2I0ymjNFg`
          )
          .then((res) => {
            if (res.data.features.length <= 0 && data.length <= 0) {
              getLocation([{ error: "No result found" }]);
            } else {
              getLocation([...res.data.features]);
            }
          });

        const img = map.getCanvas().toDataURL("image/png", 1.0);
        getSnapshot(img);
      });
    });

    return () => map.remove();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getLocation]);

  return (
    <div className="map-container">
      <div ref={mapContainer} className="map" />
    </div>
  );
}

export default Map;
