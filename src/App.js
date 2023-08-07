
/* Propacity's first Project, StarWars App 
  Github Link -  https://github.com/Vimleshkg/StarWarsApp
*/


import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import Search from "./Search";
import Body from "./Body";
import bridge from "./bridge.png";
import Number from "./Number";
import Amenties from "./Amenties";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <>
      <div className="App" style={{ backgroundImage: `url(${bridge})` }}>
        <Navbar />
        <div className="mumbai-btn">
          <button>MUMBAI</button>
        </div>
        <div className="project-ananya">
          <div className="project-ananya-inner">
            <h1>PROJECT</h1>
            <h2>ARANYA</h2>
            <h4>Pirimal Groups</h4>
          </div>
        </div>
        <Search />

        <Body />
        <Number />
        <Amenties />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
