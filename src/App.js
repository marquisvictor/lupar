import React from "react";
import Info from "./component/info";
import Nav from "./component/nav";
import Map from "./component/map";

function App() {
  return (
    <div className="app">
      <Nav />

      <main>
        <div className="main-section">
          <Info />
          <Map />
        </div>
      </main>
    </div>
  );
}

export default App;
