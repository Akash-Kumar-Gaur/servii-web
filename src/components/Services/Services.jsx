import React from "react";
import BikeRepair from "../../assets/images/OurServicesImg/BikeRepair.svg";
import Breakdown from "../../assets/images/OurServicesImg/Breakdown.svg";
import CarRepair from "../../assets/images/OurServicesImg/CarRepair.svg";
import PickupDrop from "../../assets/images/OurServicesImg/PickupDrop.svg";
import RoadSide from "../../assets/images/OurServicesImg/RoadSide.svg";
import VehicleWash from "../../assets/images/OurServicesImg/VehicleWash.svg";
import VehicleAcc from "../../assets/images/OurServicesImg/VehicleAcc.svg";
import phone_24px from "../../assets/images/ContactUsImg/phone_24px.svg";
import "../Home/styles.scss";

import "./Services.css";

const Services = () => {
  return (
    <>
      <div className="services-header-container w-100">
        <div className="header green-background">Our Community Services</div>
        <div className="contact-details text-right">
          <h6>Reach us at:&nbsp;&nbsp;</h6>
          <div className="number-container">
            <img src={phone_24px} alt="tele" />
            +91 - 7054314613 / 7013827615
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
          <div className="service-card">
            <img src={VehicleWash} className="card-img-top" alt="VehicleWash" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="card service-card">
            <div className="card-body service-body">
              <h5 className="card-title service-title">Vehicle Sanitisation</h5>
              <p className="card-text service-text">
                Monthly Vehicle Sanitisation & Cleaning
              </p>
              <ul>
                <li>26 Days Cleaning + Sanitisation</li>
                <li>Weekly Interior Cleanings</li>
                <li style={{ textDecoration: "line-through" }}>STP Water</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
          <div className="card service-card">
            <div className="card-body service-body">
              <h5 className="card-title service-title">Breakdown Services</h5>
              <p className="card-text service-text">
                Jumpstart, puncture repair, towing, and assorted breakdown
                support
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="service-card">
            <img src={Breakdown} className="card-img-top" alt="Breakdown" />
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
          <div className="service-card">
            <img src={CarRepair} className="card-img-top" alt="CarRepair" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="card service-card">
            <div className="card-body service-body">
              <h5 className="card-title service-title">
                Car Repair and General Services
              </h5>
              <p className="card-text service-text">
                Dents, paints, scratches and your periodic car checkup all at
                special prices.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
          <div className="card service-card">
            <div className="card-body service-body">
              <h5 className="card-title service-title">
                Bike Repair and General Services
              </h5>
              <p className="card-text service-text">
                Get your periodic Bike general service all at special prices.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="service-card">
            <img src={BikeRepair} className="card-img-top" alt="BikeRepair" />
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
          <div className="service-card">
            <img src={PickupDrop} className="card-img-top" alt="PickupDrop" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="card service-card">
            <div className="card-body service-body">
              <h5 className="card-title service-title">
                Pick-up and Drop Services (2W)
              </h5>
              <p className="card-text service-text">
                We'll handle the pick & drop of your vehicles to and fro any
                garage/address you want us to.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
          <div className="card service-card">
            <div className="card-body service-body">
              <h5 className="card-title service-title">Vehicle Accessories</h5>
              <p className="card-text service-text">
                Get your periodic Bike general service all at special prices.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="service-card">
            <img src={VehicleAcc} className="card-img-top" alt="VehicleAcc" />
          </div>
        </div>
      </div>
      <div className="row mt-4" style={{ marginBottom: "10rem" }}>
        <div className="col-md-6">
          <div className="service-card">
            <img src={RoadSide} className="card-img-top" alt="RoadSide" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="card service-card">
            <div className="card-body service-body">
              <h5 className="card-title service-title">Roadside Assistance</h5>
              <p className="card-text service-text">
                Throughout our HSR - Electronic City linkup, we will be here for
                you anytime, any bylane at the click of a button.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
