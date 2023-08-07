import React from "react";
import firstImage from "./1.png";
import secondImage from "./2.png";
import thirdImage from "./3.png";
import fourthImage from "./4.png";

function Body() {
  return (
    <div className="body-class">
      <div>
      </div>
      <div className="test image-container-first">
        <img src={firstImage} alt="not" />
        <img src={secondImage} alt="not" />
      </div>

      <div className="test about-container-first">
        <h4>MUMBAI</h4>
        <h1>OUR APARTMENTS</h1>
        <p>
          Presenting Piramal Aranya, a high rise gated sanctuary that offers
          luxuriant <br></br>2, 3 & 4 BHK homes inclusive of advanced wellness
          technologies, dual-aspect <br></br> blue and green views and a
          world-class lifestyle crafted alongside the world’s <br></br>leading
          partners at Rani Baug, Byculla, South Mumbai.
        </p>
      </div>

      <div className="test about-container-second">
        <h4>2 BED EXCLUSIVE RESIDENCES</h4>
        <h1>2BHK - EAST WING</h1>
        <p>
          • All bedrooms with en-suite bathrooms <br></br>• Apartments with
          harbour views<br></br>• Master bedroom with corner windows offering
          panoramic views <br></br>• All shafts on the external face • Kitchen
          with dry balcony <br></br>• Ease of combining apartments to create
          exclusive wing <br></br>apartment with expansive living & dining area
        </p>
      </div>

      <div className="test image-container-second">
        <img src={thirdImage} alt="not" />
        <img src={fourthImage} alt="not" />
      </div>
    </div>
  );
}

export default Body;
