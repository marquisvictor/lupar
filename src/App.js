import Info from "./component/info";
import Nav from "./component/nav";
import Map from "./component/map";


function App() {
  return (
    <div className="App">
      
      <Nav />
      <main className="main-section">
        <Info />
        <Map />
      </main>

    </div>
  );
}

export default App;
