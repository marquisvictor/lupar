import React from "react";

function BuildingUse({ getNumberOf, getPercentageOf }) {
  return (
    <table>
      <thead>
        <tr>
          <th scope="col">LAND USE</th>
          <th scope="col">No. of Plot</th>
          <th scope="col">%</th>
        </tr>
      </thead>
      <tbody>
        <tr
          style={{
            background: "#f7f1f1",
          }}
        >
          <th scope="row">Residential</th>
          <td>{getNumberOf("residential")}</td>
          <td>{getPercentageOf("residential")}%</td>
        </tr>
        <tr>
          <th scope="row">Commercial</th>
          <td>{getNumberOf("commercial")}</td>
          <td>{getPercentageOf("commercial")}%</td>
        </tr>
        <tr
          style={{
            background: "#f7f1f1",
          }}
        >
          <th scope="row">Mixed</th>
          <td>{getNumberOf("mixed")}</td>
          <td>{getPercentageOf("mixed")}%</td>
        </tr>
        <tr>
          <th scope="row">Public</th>
          <td>{getNumberOf("public")}</td>
          <td>{getPercentageOf("public")}%</td>
        </tr>
        <tr
          style={{
            background: "#f7f1f1",
          }}
        >
          <th scope="row">Recreational</th>
          <td>{getNumberOf("recreational")}</td>
          <td>{getPercentageOf("recreational")}%</td>
        </tr>
        <tr>
          <th scope="row">Under Construction</th>
          <td>{getNumberOf("under")}</td>
          <td>{getPercentageOf("under")}%</td>
        </tr>
        <tr
          style={{
            background: "#f7f1f1",
          }}
        >
          <th scope="row">Vacant Plot</th>
          <td>{getNumberOf("vacant")}</td>
          <td>{getPercentageOf("vacant")}%</td>
        </tr>
        <tr>
          <th scope="row">Circulation</th>
          <td>{getNumberOf("circulation")}</td>
          <td>{getPercentageOf("circulation")}%</td>
        </tr>
        <tr
          style={{
            background: "#f7f1f1",
          }}
        >
          <th scope="row">Auxiliary and Support</th>
          <td>{getNumberOf("auxiliary")}</td>
          <td>{getPercentageOf("auxiliary")}%</td>
        </tr>
      </tbody>
    </table>
  );
}

export default BuildingUse;
