import React from "react";

function BuildingCondition() {
  return (
    <table>
      <thead>
        <tr>
          <th scope="col">CONDITION OF BUILDING</th>
          <th scope="col">NO BUILDING</th>
          <th scope="col">PROPORTION (%)</th>
        </tr>
      </thead>
      <tbody>
        <tr
          style={{
            background: "#f7f1f1",
          }}
        >
          <th scope="row">Excellent</th>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">V. good</th>
          <td></td>
          <td></td>
        </tr>
        <tr
          style={{
            background: "#f7f1f1",
          }}
        >
          <th scope="row">Good</th>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Fair</th>
          <td></td>
          <td></td>
        </tr>
        <tr
          style={{
            background: "#f7f1f1",
          }}
        >
          <th scope="row">Poor</th>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">TOTAL</th>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
}

export default BuildingCondition;
