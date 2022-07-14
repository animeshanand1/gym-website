import React, { useState } from "react";

import { BrowserRouter as Router, Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Header.css";
import Bars from "../../assets/bars.png";

function Header() {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="header">
      <img className="logo" src={logo} alt="" />
      {menuOpened === false && mobile === true ? (
        <div style={{
          backgrounColor:'var(--appColor)',
          padding:".5rem",
          borderRadius:'5px'
        }} onClick={()=>setMenuOpened(true)}>
          <img src={Bars} style={{width:'1.5rem',height:'1.5rem'}} />
        </div>
      ) : (
        <ul className="header-menu">
          <li><Link to="/"  class="active" onClick={()=>setMenuOpened(false)}   >Home </Link></li>
          <li><Link to="/programs" onClick={()=>setMenuOpened(false)}>Programs</Link></li>
          <li><Link to="/reasons" onClick={()=>setMenuOpened(false)}>Why Us</Link></li>
          <li><Link to="/plans" onClick={()=>setMenuOpened(false)}>Plans</Link></li>
          <li><Link to="/testimonials" onClick={()=>setMenuOpened(false)}>Testimonials</Link></li>
        </ul>
      )}
    </div>
  );
}

export default Header;
