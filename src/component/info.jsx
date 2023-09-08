import React, { useEffect, useState } from "react";
import Building from "./building/";

function Info({ data, image }) {
  const [building, setBuilding] = useState({});
  const [area, setArea] = useState([]);

  useEffect(() => {
    if (data !== [""]) {
      setBuilding({ ...data[0] });

      const duplicateData = Array.from(data);
      duplicateData.splice(0, 1);
      setArea(duplicateData);
    }
  }, [data]);

  return data.length >= 1 ? (
    <MapInfo image={image} building={building} area={area} />
  ) : (
    <DefaultInfo />
  );
}

function MapInfo({ image, building, area }) {
  return building?.error ? (
    <div className="section-container">
      <div className="section-heading">Welcome to this Platform</div>
      <div className="section-text">
        <p>{building?.error}</p>
        <p>
          Items appear after you perform a valid search or other task that
          returns results.
        </p>
      </div>
    </div>
  ) : (
    <Building image={image} area={area} {...building} />
  );
}

function DefaultInfo() {
  return (
    <div className="section-container">
      <div className="section-heading">Welcome to this Platform</div>
      <div className="section-text">
        <p>
          This is a tool that you can use to view, query and create your own
          property reports. More than a mapping tool, it's a gateway to a whole
          range of planning information.
        </p>
        <div>
          <b>Search for information</b>
          <p className="intro">
            The interactive single search bar allows you to search for a range
            of information simply by entering the information you are looking
            for. Start by typing at least the first 3 letters of your search.
            Items you can search for are:
          </p>
          <ul className="intro-list">
            <li>Address</li>
            <li>Lot on Plan</li>
            <li>SPI</li>
            <li>Heriage Number</li>
            <li>Locality</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Info;
