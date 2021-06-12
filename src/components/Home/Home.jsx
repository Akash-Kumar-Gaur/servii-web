import React from "react";
import "./Home.css";
import Carousel from "./Carousel";
import IconList from "./IconList";
import LogoList from "./LogoList";
import carService from "../../assets/images/HomeScreenImg/carService.png";
import towTruck from "../../assets/images/HomeScreenImg/towTruck.png";
import screenShot from "../../assets/images/HomeScreenImg/screenShot.png";
import illustration from "../../assets/images/HomeScreenImg/illustration.png";
import call_24px from "../../assets/images/HomeScreenImg/call_24px.svg";
import share from "../../assets/images/HomeScreenImg/share.svg";
import location from "../../assets/images/HomeScreenImg/location.png";
import image1 from "../../assets/images/HomeScreenImg/image1.png";
import image2 from "../../assets/images/HomeScreenImg/image2.png";

const Home = () => {
  const [activeCarousel, setActiveCarousel] = React.useState(
    "Vehicle Sanitisation"
  );
  const [isReferForm, setReferForm] = React.useState(false);

  const updateActiveCarousel = (value) => {
    setActiveCarousel(value);
  };
  return (
    <div className="home-container" style={{ marginTop: '9rem' }}>
      {/* Intro with carousel */}
      <div className="row section">
        <div className="col-md-6">
          <h1>
            You Own The <b>Vehicle</b>,
            <br />
            We Own Its <b>Life</b>
          </h1>
          <p className="label-text1">
            One stop shop, for everything and anything automobile <br />
            for your housing community
          </p>
          <h4 className="pt-4">
            Need <span className="green-color">{activeCarousel}</span>
            <br /> for your community?
          </h4>
          <button className="btn btn-dark">
            <a href="#form-section">Schedule a demo</a>
          </button>
          <button className="ml-3 btn btn-outline-dark">
            <a href="#form-section">Refer your society</a>
          </button>
        </div>

        <div className="col-md-6 order-1 pr-md-0 pr-2 pl-5">
          {/* carousel */}
          <Carousel updateActiveCarousel={updateActiveCarousel} />
        </div>
      </div>
      {/* Why Communities Choose us? */}
      <div className="section">
        <div className="header green-background">
          Why Communities Choose us?
        </div>
        <IconList />
      </div>

      {/* Communities which trust us */}
      <div className="section">
        {/* marqueee */}
        <div className="header green-background">
          Communities which trust us
        </div>
        {/* <marquee behavior="scroll" direction="left" scrollamount="12"> */}
        <LogoList />
        {/* </marquee> */}
      </div>

      {/* few cards and images to show produt details */}
      <div className="row section">
        <div className="col-md-6 px-3">
          <div className="media mt-3">
            <div className="image-container mr-4">
              <img
                className="card-img-top icon-image align-self-center"
                src={carService}
                alt="service"
              />
            </div>
            <div className="media-body">
              <p className="mt-0 label-text">5000+</p>
              <p className="label-text1">Vehicle Sanitisation/Month</p>
            </div>
          </div>

          <div className="media mt-3">
            <div className="image-container mr-4">
              <img
                className="card-img-top icon-image align-self-center"
                src={towTruck}
                alt="service"
              />
            </div>
            <div className="media-body">
              <p className="mt-0 label-text">200+</p>
              <p className="label-text1">Breakdown Order Executed</p>
            </div>
          </div>

          <div className="media mt-3">
            <div className="image-container mr-4">
              <img
                className="card-img-top icon-image align-self-center"
                src={towTruck}
                alt="service"
              />
            </div>
            <div className="media-body">
              <p className="mt-0 label-text">150+</p>
              <p className="label-text1">Vehicle Serviced</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 order-1 text-right">
          <img className="screeshot-image" src={screenShot} alt="service" />
        </div>
      </div>

      {/* Our Recognisation */}
      <div className="section">
        <div className="header green-background">Our Recognisation</div>
        <div className="row justify-content-around">
          <div className="col-md-5 text-center">
            <img className="recognisation-img-1" src={image1} alt="service" />
            <button className="btn btn-light btn-lg btn-block">
              Govt. of India under Start up India Programme
            </button>
          </div>
          <div className="col-md-5 order-1 text-center">
            <img className="recognisation-img-2" src={image2} alt="service" />
            <button className="btn btn-light btn-lg btn-block">
              Member of TIE Mumbai
            </button>
          </div>
        </div>
      </div>

      {/* Schedule a demo / Refer Society */}
      <div id="form-section" className="section">
        <div className="form-header-container w-100">
          <div className="header green-background">
            Schedule a demo / Refer Society
          </div>

          <img src={location} alt="location bangalore" />
        </div>

        <div className="row">
          <div className="col-md-6 pt-5">
            {/* form */}
            <div className="form-header-container">
              <h3 className="label-text1">{isReferForm ? "Refer Society" : "Schedule a demo"}</h3>
              <p
                className="text-right"
                style={{ cursor: "pointer" }}
                onClick={() => setReferForm(!isReferForm)}
              >
                <img
                  src={isReferForm ? call_24px : share}
                  alt={isReferForm ? "tele icon" : "share icon"}
                />
                {isReferForm ? "Schedule a demo" : " Refer Society"}
              </p>
            </div>

            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="user-name"
                  aria-describedby="userName"
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="user-role"
                  aria-describedby="userRole"
                  placeholder={isReferForm ? "Your Society" : "Your Role"}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="user-email"
                  aria-describedby="emailHelp"
                  placeholder={
                    isReferForm ? "Referral Person Name" : "Email ID"
                  }
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  className="form-control"
                  id="contact-number"
                  aria-describedby="userContactNumber"
                  placeholder={
                    isReferForm ? "Referral Contact Number" : "Contact Number"
                  }
                  pattern="[0-9]{10}"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="socienty-name"
                  aria-describedby="societyName"
                  placeholder={
                    isReferForm ? "Referral Society Name" : "Society Name"
                  }
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
          <div className="col-md-6 order-1 text-right pt-5">
            {/* image */}
            <img
              className="illustration-image"
              src={illustration}
              alt="illustration"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
