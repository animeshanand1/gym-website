import React from "react";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";
import "./footer.css";
function Footer() {
  return (
    <div className="footer-conatiner">
      <hr className="footer-hr" />
      <div className="footer">
        <div className="social-media">
          <img src={Github} alt="" />
          <img src={Instagram} alt="" />
          <img src={Linkedin} alt="" />
        </div>
      </div>
      <div className="logo-f">
        <div className="blur blur-footer-1"></div>
        <div className="blur blur-footer-2"></div>
        <img src={Logo} alt="" />
      </div>
    </div>
  );
}

export default Footer;
