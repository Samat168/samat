import React from "react";
import google from "../image/Google icon.png";
import rating from "../image/Rating.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_content">
        <img src={google} alt="" />
        <p className="footer_content_desc">
          5.0
          <img className="rate" src={rating} alt="" />
        </p>
        <p className="footer_content_desc2">Based on 106 reviews</p>
      </div>
      <ul>
        <li>Grow your career</li>
        <li>Build a team</li>
      </ul>
      <ul>
        <li>Meet the founders</li>
        <li>Mentorship</li>
        <li>Say hello</li>
      </ul>
    </div>
  );
};

export default Footer;
