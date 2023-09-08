import React from "react";

function RoadTable({ road }) {
  return (
    <table>
      <tbody>
        {road?.Category_A && (
          <tr>
            <th scope="row">Road Category</th>
            <td>{road?.Category_A}</td>
          </tr>
        )}

        {road?.drainage_a && (
          <tr
            style={{
              background: "#f7f1f1",
            }}
          >
            <th scope="row">Drainage</th>
            <td>{road?.drainage_a}</td>
          </tr>
        )}

        {road?.road_condi && (
          <tr>
            <th scope="row">Road Condition</th>
            <td>{road?.road_condi}</td>
          </tr>
        )}

        {road?.supervisor && (
          <tr
            style={{
              background: "#f7f1f1",
            }}
          >
            <th scope="row">Supervised by</th>
            <td>{road?.supervisor}</td>
          </tr>
        )}

        {road?.road_maint && (
          <tr>
            <th scope="row">Maintained by</th>
            <td>{road?.road_maint}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default RoadTable;
