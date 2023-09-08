import React, { useState } from "react";
import Info from "./component/info";
import Nav from "./component/nav";
import Map from "./component/map";

function App() {
  const [data, setData] = useState([]);
  const [snapShot, getSnapShot] = useState("");

  return (
    <div className="app">
      <Nav />

      <main>
        <div className="main-section">
          <Info data={data} image={snapShot} />
          <Map data={data} getSnapshot={getSnapShot} getLocation={setData} />
        </div>
      </main>
    </div>
  );
}

export default App;
