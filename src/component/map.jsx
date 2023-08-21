import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import lupar from "../assets/lupar.geojson";
import axios from "axios";

mapboxgl.accessToken =
  "pk.eyJ1IjoidmlyZWtzIiwiYSI6ImNsbDAwcG8xNDFxa3AzbW1hMnNyM3gwNXYifQ.fjhylwF_ayrfb2I0ymjNFg";

function Map({ getLocation }) {
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      zoom: 12.22,
      center: [3.394317, 6.567252],
      // style: "mapbox://styles/mapbox/streets-v11",
      style: "mapbox://styles/mapbox/dark-v11",
    });

    map.on("load", () => {
      // map.addSource("tileset_data", {
      //   type: "vector",
      //   url: "mapbox://vireks.72lx880c",
      // });

      // map.addLayer({
      //   id: "vireks.72lx880c",
      //   type: "line",
      //   source: "tileset_data",
      //   "source-layer": "lupar_road-2cal1w",
      //   layout: {
      //     "line-join": "round",
      //     "line-cap": "round",
      //   },
      //   paint: {
      //     "line-color": "#ff7474",
      //     "line-width": 1,
      //   },
      // });

      map.addSource("earthquakes", {
        type: "geojson",
        // Use a URL for the value for the `data` property.
        data: lupar,
      });

      console.log(lupar);

      map.addLayer({
        id: "earthquakes-layer",
        type: "circle",
        source: "earthquakes",
        paint: {
          "circle-radius": 4,
          "circle-stroke-width": 2,
          "circle-color": "red",
          "circle-stroke-color": "white",
        },
      });

      map.on("click", (e) => {
        const lat = e.lngLat.lat;
        const long = e.lngLat.lng;
        // console.log(long,lat)

        axios
          .get(
            `https://api.mapbox.com/v4/vireks.72lx880c/tilequery/${long},${lat}.json?radius=25&limit=5&dedupe&access_token=pk.eyJ1IjoidmlyZWtzIiwiYSI6ImNsbDAwcG8xNDFxa3AzbW1hMnNyM3gwNXYifQ.fjhylwF_ayrfb2I0ymjNFg`
          )
          .then((res) => {
            if (res.data.features.length <= 0) {
              getLocation([{ error: "No result found" }]);
            } else {
              getLocation(res.data.features);
            }
          });
      });
    });

    return () => map.remove();
  }, [getLocation]);

  return (
    <div className="map-container">
      <div ref={mapContainer} className="map" />
    </div>
  );
}

export default Map;
