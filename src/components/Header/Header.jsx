import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import hlogo from "../../assets/images/hlogo.svg";
import FooterImg from "../../assets/images/footerImg.svg";

function Hedaer() {
  const [click, setClick] = useState(false);
  const [colorChange, setColorchange] = useState(false); // colorChange for navbar initially set to false

  const handleClick = () => setClick(!click); // handleclick fn to navigate on navlinks click
  const changeNavbarColor = () => { // changeNavBarColor fn to change the navbar appearnace on scroll
    if (window.scrollY >= 80) {
      setColorchange(true); // colorChange set to true if scrlled beyond window limit specified
    } else {
      setColorchange(false); // colorChange set to false if scrlled beyond window limit specified
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <>
      <nav className={colorChange ? 'change-nav nav-header' : "navbar abc"}>
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img src={colorChange ? FooterImg : hlogo} className={colorChange ? "servi-logo" : null} alt="hlogo" />
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className={colorChange ? 'change-nav-item' : "nav-item"}>
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className={colorChange ? 'change-nav-link' : "nav-links"}
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className={colorChange ? 'change-nav-item' : "nav-item"}>
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className={colorChange ? 'change-nav-link' : "nav-links"}
                onClick={handleClick}
              >
                About Us
              </NavLink>
            </li>
            <li className={colorChange ? 'change-nav-item' : "nav-item"}>
              <NavLink
                exact
                to="/services"
                activeClassName="active"
                className={colorChange ? 'change-nav-link' : "nav-links"}
                onClick={handleClick}
              >
                Services
              </NavLink>
            </li>
            <li className={colorChange ? 'change-nav-item' : "nav-item"}>
              <NavLink
                exact
                to="/contactUs"
                activeClassName="active"
                className={colorChange ? 'change-nav-link' : "nav-links"}
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Hedaer;
