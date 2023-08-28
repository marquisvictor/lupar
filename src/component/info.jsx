import React, { useEffect, useState } from "react";

function Info({ data, dataType }) {
  const [mainData, setMainData] = useState();

  useEffect(() => {
    if (data !== [""]) {
      setMainData(data[0]);
    }
    console.log(data);
  }, [data]);

  return data.length >= 1 ? (
    <MapInfo {...mainData} dataType={dataType} />
  ) : (
    <DefaultInfo />
  );
}

function MapInfo({ geometry, id, properties, error, dataType }) {
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
      ) : dataType === "road" ? (
        <>
          <div className="section-heading">
            {properties?.LABEL} Road Properties
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
      ) : (
        <>
          <div className="section-heading">{properties?.address}</div>
          <div className="section-table">
            <table>
              <thead>
                <tr>
                  <th scope="col">Property</th>
                  <th scope="col">Details</th>
                </tr>
              </thead>
              <tbody>
                {properties?.Height_Flo && (
                  <tr>
                    <th scope="row">Height Flo</th>
                    <td>{properties?.Height_Flo}</td>
                  </tr>
                )}

                {properties?.NAME && (
                  <tr>
                    <th scope="row">Name</th>
                    <td>{properties?.NAME}</td>
                  </tr>
                )}

                {properties?.OBJECTID && (
                  <tr>
                    <th scope="row">Object ID</th>
                    <td>{properties?.OBJECTID}</td>
                  </tr>
                )}

                {properties?.Shape_Area && (
                  <tr>
                    <th scope="row">Area Shape</th>
                    <td>{properties?.Shape_Area}</td>
                  </tr>
                )}

                {properties?.Shape_Leng && (
                  <tr>
                    <th scope="row">Area Length</th>
                    <td>{properties?.Shape_Leng}</td>
                  </tr>
                )}

                {properties?.address && (
                  <tr>
                    <th scope="row">Address</th>
                    <td>{properties?.address}</td>
                  </tr>
                )}

                {properties?.building_h && (
                  <tr>
                    <th scope="row">No. of floor</th>
                    <td>{properties?.building_h}</td>
                  </tr>
                )}

                {properties?.status && (
                  <tr>
                    <th scope="row">Status</th>
                    <td>{properties?.status}</td>
                  </tr>
                )}

                {properties?.building_n && (
                  <tr>
                    <th scope="row">Building Niche</th>
                    <td>{properties?.building_n}</td>
                  </tr>
                )}

                {properties?.building_t && (
                  <tr>
                    <th scope="row">Building Type</th>
                    <td>{properties?.building_t}</td>
                  </tr>
                )}

                {properties?.building_u && (
                  <tr>
                    <th scope="row">Building Use</th>
                    <td>{properties?.building_u}</td>
                  </tr>
                )}

                {properties?.zone_name && (
                  <tr>
                    <th scope="row">Zone name</th>
                    <td>{properties?.zone_name}</td>
                  </tr>
                )}

                {(properties?.roof_mater || properties?.roofing_st) && (
                  <tr>
                    <th scope="row">Roof Type</th>
                    <td>
                      {properties?.roof_mater} {properties?.roofing_st}
                    </td>
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
