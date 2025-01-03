import React from "react";
import "./service.css";
import img from "../../assets/all-images/tout-services/hotel .gif"
import img2 from "../../assets/all-images/tout-services/car.gif"
import img3 from "../../assets/all-images/tout-services/airplane.gif"
import img4 from "../../assets/all-images/tout-services/guide.gif"
import { Link } from "react-router-dom";

function Services() {
  return (
    <div className="services">
      <ul>
        <a href= "https://www.momondo.in/stays" className="Link">
          <li>
            <div className="servies_card">
              <img src={img} alt="" />
              <p>Hotel / stays</p>
            </div>
          </li>
        </a>

        <Link to='/CarRent' className="Link">
          <li>
            <div className="servies_card">
              <img src={img2} alt="" />
              <p>Car Rentals</p>
            </div>
          </li>
        </Link>

        <a href="https://www.skyscanner.co.in" className="Link">
          <li>
            <div className="servies_card">
              <img src={img3} alt="" />
              <p>Flights</p>
            </div>
          </li>
        </a>

        <Link to= '/Ai' className="Link">
          <li>
            <div className="servies_card">
              <img src={img4} alt="" />
              <p>Tour Guides</p>
            </div>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Services;
