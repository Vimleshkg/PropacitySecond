import React from "react";
import { GiBurningTree } from "react-icons/gi";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="inner-first">
        <div>
          <GiBurningTree className="icon" />
        </div>
        <div>
          <h1>Piramal</h1>
          <h4>aranya</h4>
        </div>
      </div>
      <div>
        <ul>
          <li>HOME</li>
          <li>OVERVIEW</li>
          <li>AMENTIES</li>
          <li>GALLERY</li>
          <li>CONTACT</li>
        </ul>
      </div>

      <div>
        <button className="btn">EXPLORE</button>
      </div>
    </div>
  );
}

export default Navbar;
