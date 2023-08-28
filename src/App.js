import React, { useState } from "react";
import Info from "./component/info";
import Nav from "./component/nav";
import Map from "./component/map";

function App() {
  const [data, setData] = useState([]);
  const [dataType, setDataType] = useState("");

  return (
    <div className="app">
      <Nav />

      <main>
        <div className="main-section">
          <Info dataType={dataType} data={data} />
          <Map data={data} setDataType={setDataType} getLocation={setData} />
        </div>
      </main>
    </div>
  );
}

export default App;
