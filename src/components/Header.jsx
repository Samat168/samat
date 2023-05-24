import React from "react";
import "./Header.css";
import img1 from "../image/photo1.png";
import img2 from "../image/photo2.png";
import logo1 from "../image/logo1.png";
import logo2 from "../image/logo2.png";
import logo3 from "../image/logo3.png";
import logo4 from "../image/logo4.png";
import logo5 from "../image/logo5.png";
import logo6 from "../image/logo6.png";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="header_block">
          <h1>Discover, nurture, bloom</h1>
          <p>Discover, nurture, bloom</p>
          <p>va va bloom, with a human touch and a dash of</p>
        </div>
        <img src={img1} alt="" className="img1" />
        <img src={img2} alt="" className="img2" />
      </div>
      <div className="header_down">
        <ul className="header_item">
          <li className="logo2">
            <img src={logo1} alt="" />
          </li>
          <li className="logo2">
            <img src={logo2} alt="" />
          </li>
          <li className="logo2">
            <img src={logo3} alt="" />
          </li>
          <li className="logo2">
            <img src={logo4} alt="" />
          </li>
          <li className="logo2">
            <img src={logo5} alt="" />
          </li>
          <li className="logo2">
            <img src={logo6} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
