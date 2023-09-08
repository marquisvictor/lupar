import React from "react";

function BuildingTable({ data }) {
  return (
    <table>
      <tbody>
        {data?.building_u && (
          <tr>
            <th scope="row">Building Use</th>
            <td>{data?.building_u}</td>
          </tr>
        )}

        {data?.building_t && (
          <tr
            style={{
              background: "#f7f1f1",
            }}
          >
            <th scope="row">Building Type</th>
            <td>{data?.building_t}</td>
          </tr>
        )}

        {data?.status && (
          <tr>
            <th scope="row">Status</th>
            <td>{data?.status}</td>
          </tr>
        )}

        {data?.building_n && (
          <tr
            style={{
              background: "#f7f1f1",
            }}
          >
            <th scope="row">Building Niche</th>
            <td>{data?.building_n}</td>
          </tr>
        )}

        {data?.Shape_Area && (
          <tr>
            <th scope="row">Building Area</th>
            <td>{Math.floor(data?.Shape_Area)}sqm</td>
          </tr>
        )}

        {data?.building_h && (
          <tr
            style={{
              background: "#f7f1f1",
            }}
          >
            <th scope="row">Building Height</th>
            <td>{data?.building_h}</td>
          </tr>
        )}

        {(data?.roof_mater || data?.roofing_st) && (
          <tr>
            <th scope="row">Roof Type</th>
            <td>
              {data?.roof_mater} {data?.roofing_st}
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default BuildingTable;
