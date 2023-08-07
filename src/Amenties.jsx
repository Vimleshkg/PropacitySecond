import React from "react";
import amenties from './5.png';
import amentiess from './6.png';

function Amenties() {
  return (
    <div className="amenties">
      <div className="be-center">
        <h5>ARANYA SERV CES</h5>
        <h1>30+ PREMIUM AMENTIES</h1>
      </div>
      <div className="flex-amenties">
        <div>
          <h4>RECEPTION</h4>
          <span>6 Area For Reception Serve 24/7</span>
        </div>
        <div>
          <h4>SECURITY</h4>
          <span>Security Town with 24/7 cameras system</span>
        </div>
        <div>
          <h4>FIRE ALARM</h4>
          <span>Automatic Fire Enguring System</span>
        </div>
        <div>
          <h4>SUPERMARKET</h4>
          <span>Top Notch Supermarkets</span>
        </div>
        <div>
          <h4>CONFERENCE ROOM</h4>
          <span>5 Conference Room Setup in Each Block</span>
        </div>
        <div>
          <h4>CONDITIONING</h4>
          <span>Ensure Ventilation and Conditioning</span>
        </div>
        <div>
          <h4>PARKING</h4>
          <span>Best place for parking</span>
        </div>
        <div>
          <h4>SPA AND MASSAGE</h4>
          <span>Span and Message support</span>
        </div>
        <div>
          <h4>4 SEASON POOL</h4>
          <span>6 Star fashion and designing</span>
        </div>
      </div>
      <img className="first-image" src={amenties} alt="" />
      <img className="second-image" src={amentiess} alt="" />
    </div>
  );
}

export default Amenties;
