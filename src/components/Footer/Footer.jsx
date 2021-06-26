import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import Insta from "../../assets/images/Ig.svg";
import Facebook from "../../assets/images/Fb.svg";
import LinkedIn from "../../assets/images/LinkedIn.svg";
import FooterImg from "../../assets/images/footerImg.svg";
import "../Home/styles.scss";

const Footer = () => {
  const handleClick = () => setClick(!click);
  const [click, setClick] = useState(false);
  return (
    <footer>
      <div style={{ padding: "2px" }} className="myFooter">
        <img src={FooterImg} style={{ float: "left" }} alt="FooterImg" />
        <ul id="menu">
          <li>
            <NavLink exact to="/about" className="link" onClick={handleClick}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/services"
              className="link"
              onClick={handleClick}
            >
              Our Services
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/" className="link" onClick={handleClick}>
              FAQs
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/contactUs"
              className="link"
              onClick={handleClick}
            >
              Contact Us
            </NavLink>
          </li>
          <li>
            <a
              href="http://servii.in/privacypolicy.html"
              target="_blank"
              rel="noreferrer"
            >
              Privacy & Policy
            </a>
          </li>
          <li>
            <a
              href="http://servii.in/termandcondition.html"
              target="_blank"
              rel="noreferrer"
            >
              Terms & Condition
            </a>
          </li>
        </ul>
      </div>

      <div className="footer-icons mt-4">
        <label className="designed-text">
          Designed with&nbsp;&nbsp;
          <span>
            <i className="fa fa-heart" style={{ color: "red" }}></i>
          </span>
          &nbsp;&nbsp;india
        </label>
        <div className="icon-group">
          <a
            href="https://www.instagram.com/servii.in/?utm_medium=copy_link"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Insta} className="card-img-top icon" alt="Insta" />
          </a>
          <a
            href="https://www.facebook.com/ServiiIND/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={Facebook}
              className="card-img-top fb-icon"
              alt="Facebook"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/servii/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={LinkedIn}
              className="card-img-top li-icon"
              alt="LinkedIn"
            />
          </a>
        </div>
        <div>
          <label className="copy-servi">
            &copy; 2021 Servii Automotives Pvt.Ltd.
          </label>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
