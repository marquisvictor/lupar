import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React, { useRef } from "react";

function Road({ properties }) {
  const tableContent = useRef();

  const downloadPdf = () => {
    const tableInput = tableContent.current;

    html2canvas(tableInput).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4", true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 30;

      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );
      pdf.save(`${properties?.LABEL} Road Properties`);
    });
  };

  return (
    <div ref={tableContent} className="section-container">
      <div className="section-heading">{properties?.LABEL} Road Properties</div>
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

export default Road;
