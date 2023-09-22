import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import BuildingTable from "./building properties/building";
import RoadTable from "./building properties/road";
import BuildingUse from "./building properties/building-use";
import BuildingHeight from "./building properties/building-height";
import BuildingCondition from "./building properties/building-condition";

function Content({ image, data, coord, areas }) {
  const snapShotHolder = useRef(null);
  const [road, setRoad] = useState();

  const getRoadDetails = () => {
    const long = coord[0];
    const lat = coord[1];

    axios
      .get(
        `https://api.mapbox.com/v4/vireks.72lx880c/tilequery/${long},${lat}.json?radius=25&limit=5&dedupe&access_token=pk.eyJ1IjoidmlyZWtzIiwiYSI6ImNsbDAwcG8xNDFxa3AzbW1hMnNyM3gwNXYifQ.fjhylwF_ayrfb2I0ymjNFg`
      )
      .then((res) => {
        if (res.data.features.length >= 1) {
          setRoad(res.data.features[0].properties);
        }
      });
  };

  useEffect(() => {
    if (coord !== undefined) {
      getRoadDetails();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coord]);

  const getNumberOf = (landuse) => {
    let num = 0;
    for (let i = 0; i < areas.length; i++) {
      const element = areas[i];
      if (element.properties?.building_u) {
        if (element.properties.building_u.toLowerCase().includes(landuse)) {
          num++;
        }
      }
    }
    return num;
  };

  const getPercentageOf = (landuse) => {
    const areaNum = getNumberOf(landuse);
    const percentage = Math.round((areaNum / areas.length) * 100);
    return percentage;
  };

  const getHeightOf = (height) => {
    let num = 0;
    for (let i = 0; i < areas.length; i++) {
      const element = areas[i];
      if (element.properties?.Height_Flo) {
        if (element.properties.Height_Flo.includes(height)) {
          if (height === 4 && element.properties.Height_Flo.includes(2)) {
           return;
          }
          num++;
        }
      }
    }
    return num;
  };

  const getPercentageHeightOf = (height) => {
    const areaNum = getHeightOf(height);
    const percentage = Math.round((areaNum / areas.length) * 100);
    return percentage;
  };

  useEffect(() => {
    snapShotHolder.current.innerHTML = "";
    const img = new Image();
    img.src = image;
    img.width = 300;
    img.height = 250;
    snapShotHolder.current.appendChild(img);
  }, [image]);

  return (
    <div className="not-rendered">
      <div id="pdfContent" className="pdf-rendered">
        <div
          style={{
            display: "flex",
            borderBottom: "1pt solid #d9d9d9",
            alignItems: "center",
            padding: "0 0 10px",
            justifyContent: "space-between",
            wordSpacing: "4pt",
          }}
          className="head"
        >
          <p>LAND USE ANALYSIS REPORT</p>
          <img
            src="https://acceleratingtozero.org/wp-content/uploads/2022/10/Lagos-logo.png"
            alt="Lagos logo"
            width="20px"
          />
        </div>
        <div className="body">
          <div className="list">
            <p className="list-item">1. Property Details</p>
            <div className="property">
              <div>
                (a)
                <div ref={snapShotHolder}></div>
              </div>
              <p>(b) {data?.address}</p>
              <BuildingTable data={data} />

              <p>(c) {road?.LABEL ? road?.LABEL : data?.street_nam}</p>
              <RoadTable road={road} />
            </div>

            <p className="list-item">2. Land Use Analysis Report</p>
            <div className="land-property">
              <p>(a) Use Specified radius:</p>
              <p>
                For the purpose of this section, land use study was carried out
                within a 200 meters radius of the subject site. This provides an
                inventory of building use building condition, building heights,
                and land use map of the study area
              </p>

              <div className="table-content">
                <p>(b) Analysis of Building Use</p>
                {data?.building_u ? (
                  <BuildingUse
                    getNumberOf={getNumberOf}
                    getPercentageOf={getPercentageOf}
                  />
                ) : (
                  <p>No record was found</p>
                )}
              </div>

              <div className="table-content">
                <p>(c) Analysis of Building Height</p>
                {data?.Height_Flo ? (
                  <BuildingHeight
                    getHeightOf={getHeightOf}
                    getPercentageHeightOf={getPercentageHeightOf}
                    totalLength={areas.length}
                  />
                ) : (
                  <p>No record was found</p>
                )}
              </div>

              <div className="table-content">
                <p>(d) Analysis of Building Condition</p>
                {/* {data?.building_condi ? ( */}
                <BuildingCondition />
                {/* ) : (
                  <p>No record was found</p>
                )} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
