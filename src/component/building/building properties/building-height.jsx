import React from "react";

function BuildingHeight({ getHeightOf, getPercentageHeightOf, totalLength }) {
  return (
    <table>
      <thead>
        <tr>
          <th scope="col">NO OF FLOORS</th>
          <th scope="col">NO BUILDINGS</th>
          <th scope="col">PROPORTION (%)</th>
        </tr>
      </thead>
      <tbody>
        <tr
          style={{
            background: "#f7f1f1",
          }}
        >
          <th scope="row">1</th>
          <td>{getHeightOf("1")}</td>
          <td>{getPercentageHeightOf("1")}%</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>{getHeightOf("2")}</td>
          <td>{getPercentageHeightOf("2")}%</td>
        </tr>
        <tr
          style={{
            background: "#f7f1f1",
          }}
        >
          <th scope="row">3</th>
          <td>{getHeightOf("3")}</td>
          <td>{getPercentageHeightOf("3")}%</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>{getHeightOf("4")}</td>
          <td>{getPercentageHeightOf("4")}%</td>
        </tr>
        <tr
          style={{
            background: "#f7f1f1",
          }}
        >
          <th scope="row">5</th>
          <td>{getHeightOf("5")}</td>
          <td>{getPercentageHeightOf("5")}%</td>
        </tr>
        <tr>
          <th scope="row">6</th>
          <td>{getHeightOf("6")}</td>
          <td>{getPercentageHeightOf("6")}%</td>
        </tr>
        <tr
          style={{
            background: "#f7f1f1",
          }}
        >
          <th scope="row">Above 6 (Specify)</th>
          <td>{getHeightOf("above")}</td>
          <td>{getPercentageHeightOf("above")}%</td>
        </tr>
        <tr>
          <th scope="row">Total</th>
          <td>{totalLength}</td>
          <td>100%</td>
        </tr>
      </tbody>
    </table>
  );
}

export default BuildingHeight;
