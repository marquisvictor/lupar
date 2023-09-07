import jsPDF from "jspdf";
import React, { useRef } from "react";

function Road({ properties }) {
  const tableContent = useRef();

  const downloadPdf = () => {
    const tableInput = tableContent.current.innerHTML;
    const pdf = new jsPDF("p", "pt", "a4", true);

    var getContent = `<div style='font-size:11px; padding: 05px 15px; width:565.28px;'>${tableInput}</div>`;

    pdf.html(getContent, {
      async callback(pdf) {
        // save the document as a PDF with name of pdf_name
        pdf.save(`${properties?.LABEL}`);
      },
    });
  };

  return (
    <div className="section-container">
      <div ref={tableContent}>
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
        </div>
      </div>

      <div title="Download PDF" className="download-icon" onClick={downloadPdf}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/1e/Download-Icon.png"
          alt="download pdf"
        />
      </div>
    </div>
  );
}

export default Road;
