import React from "react";
import carousel1 from "../../assets/images/HomeScreenImg/carousel1.png";
import carousel2 from "../../assets/images/HomeScreenImg/carousel2.png";
import carousel3 from "../../assets/images/HomeScreenImg/carousel3.png";
import carousel4 from "../../assets/images/HomeScreenImg/carousel4.png";
import carousel5 from "../../assets/images/HomeScreenImg/carousel5.png";
import { Carousel } from "react-bootstrap";

const carousel_list = {
  0: {
    label: "Vehicle Sanitisation",
    image: carousel1,
  },
  1: {
    label: "Breakdown Services",
    image: carousel2,
  },
  2: {
    label: "Breakdown Services",
    image: carousel3,
  },
  3: {
    label: "Car General Service",
    image: carousel4,
  },
  4: {
    label: "Bike General Service",
    image: carousel5,
  },
};
const ControlledCarousel = (props) => {
  const [index, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    let label =
      carousel_list[selectedIndex] && carousel_list[selectedIndex].label;
    props.updateActiveCarousel(label);
  };

  return (
    <>
      <Carousel
        interval={2000} //to set the interval slide for slider image to change
        activeIndex={index}
        onSelect={handleSelect}
        prevIcon={<span></span>}
        nextIcon={<span></span>}
      >
        {Object.values(carousel_list).map((carousel, index) => {
          return (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={carousel.image}
                alt={carousel.label}
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
};

export default ControlledCarousel;
