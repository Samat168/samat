import React from "react";
import img from "../image/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_logo">
        <img src={img} alt="" className="logo" />
      </div>
      <div className="text">
        <ul className="navbar_list">
          <li className="navbar_list_item">Grow your career</li>
          <li className="navbar_list_item">Build a team</li>
          <li className="navbar_list_item">Meet the founders</li>
          <li className="navbar_list_item">Mentorship</li>
          <li className="navbar_list_item">Say hello</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
