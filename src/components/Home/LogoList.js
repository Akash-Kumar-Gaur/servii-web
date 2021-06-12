import React from "react";

import logo1 from "../../assets/images/HomeScreenImg/logo1.svg";
import logo2 from "../../assets/images/HomeScreenImg/logo2.svg";
import logo3 from "../../assets/images/HomeScreenImg/logo3.svg";
import logo4 from "../../assets/images/HomeScreenImg/logo4.svg";
import logo5 from "../../assets/images/HomeScreenImg/logo5.svg";
import logo6 from "../../assets/images/HomeScreenImg/logo6.svg";
import logo7 from "../../assets/images/HomeScreenImg/logo7.svg";

const logo_list = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

const LogoList = (props) => {
  return (
    <div className="card-group">
      {logo_list.map((icon) => {
        return (
          <div className="card icon-container">
            <img
              className="card-img-top logo-image align-self-center"
              src={icon}
              alt="logo"
            />
          </div>
        );
      })}
    </div>
  );
};

export default LogoList;
