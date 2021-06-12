import React from "react";
import icon1 from "../../assets/images/HomeScreenImg/icon1.png";
import icon2 from "../../assets/images/HomeScreenImg/icon2.png";
import icon3 from "../../assets/images/HomeScreenImg/icon3.png";
import icon4 from "../../assets/images/HomeScreenImg/icon4.png";
import icon5 from "../../assets/images/HomeScreenImg/icon5.png";

const icon_list = {
  0: {
    label: "24 x 7 Customer Support",
    image: icon1,
  },
  1: {
    label: "Specific Car Care Products",
    image: icon2,
  },
  2: {
    label: "Doorstep Services",
    image: icon3,
  },
  3: {
    label: "Trained Crew",
    image: icon4,
  },
  4: {
    label: "Response time < 30 mins",
    image: icon5,
  },
};

const IconList = (props) => {
  return (
    <div className="card-group">
      {Object.values(icon_list).map((icon) => {
        return (
          <div className="card icon-container">
            <div className="image-container">
              <img
                className="card-img-top icon-image align-self-center"
                src={icon.image}
                alt={icon.label}
              />
            </div>

            <div className="card-body">
              <p className="card-text">{icon.label}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default IconList;
