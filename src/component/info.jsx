import React, { useEffect, useState } from "react";

function Info({ data }) {
  const [mainData, setMainData] = useState();

  useEffect(() => {
    if (data !== [""]) {
      setMainData(data[0]);
    }
    console.log(data);
  }, [data]);

  return data.length >= 1 ? <MapInfo {...mainData} /> : <DefaultInfo />;
}

function MapInfo({ geometry, id, properties, error }) {
  return (
    <div className="section-container">
      {error ? (
        <>
          <div className="section-heading">Welcome to this Platform</div>
          <div className="section-text">
            <p>{error}</p>
            <p>
              Items appear after you perform a valid search or other task that
              returns results.
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="section-heading">
            {properties.LABEL} Road Properties
          </div>
          <div className="section-table">
            <table>
              <thead>
                <tr>
                  <th scope="col">Property</th>
                  <th scope="col">Details</th>
                </tr>
              </thead>
              <tbody>
                {properties?.Category_A && (
                  <tr>
                    <th scope="row">Road Category</th>
                    <td>{properties?.Category_A}</td>
                  </tr>
                )}

                {properties?.drainage_a && (
                  <tr>
                    <th scope="row">Drainage</th>
                    <td>{properties?.drainage_a}</td>
                  </tr>
                )}

                {properties?.LABEL && (
                  <tr>
                    <th scope="row">Label</th>
                    <td>{properties?.LABEL}</td>
                  </tr>
                )}

                {properties?.road_condi && (
                  <tr>
                    <th scope="row">Road Condition</th>
                    <td>{properties?.road_condi}</td>
                  </tr>
                )}

                {properties?.zone_name && (
                  <tr>
                    <th scope="row">Zone name</th>
                    <td>{properties?.zone_name}</td>
                  </tr>
                )}

                {properties?.supervisor && (
                  <tr>
                    <th scope="row">Supervised by</th>
                    <td>{properties?.supervisor}</td>
                  </tr>
                )}

                {properties?.road_maint && (
                  <tr>
                    <th scope="row">Maintained by</th>
                    <td>{properties?.road_maint}</td>
                  </tr>
                )}
              </tbody>
            </table>

            <div title="Download PDF" className="download-icon">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/1e/Download-Icon.png"
                alt="download pdf"
              />
            </div>
          </div>
        </>
      )}
    </div>
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
