import jsPDF from "jspdf";
import React from "react";
import Content from "./content";

function Building({ image, geometry, properties, area }) {
  const downloadPdf = () => {
    const tableInput = document.getElementById("pdfContent").innerHTML;
    const pdf = new jsPDF("p", "pt", "a4", true);

    var getContent = `<div style='font-size:11px; padding: 30px 15px; width:565.28px;'>${tableInput}</div>`;

    pdf.html(getContent, {
      async callback(pdf) {
        // save the document as a PDF with name of pdf_name
        pdf.save(`${properties?.address}.pdf`);
      },
      autoPaging: "slice",
    });
  };

  return (
    <div className="section-container">
      <Content
        image={image}
        areas={area}
        data={properties}
        coord={geometry?.coordinates}
      />
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

        <div
          title="Download PDF"
          className="download-icon"
          onClick={downloadPdf}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/1e/Download-Icon.png"
            alt="download pdf"
          />
        </div>
      </div>
    </div>
  );
}

export default Building;
