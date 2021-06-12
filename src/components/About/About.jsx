import React from "react";
import "./About.css";
import Tenul from "../../assets/images/teamsProfile/tenul.svg";
import Abdul from "../../assets/images/teamsProfile/abdul.svg";
import Vishal from "../../assets/images/teamsProfile/vishal.svg";
import Frame from "../../assets/images/Frame.svg";
import Vector from "../../assets/images/Vector.svg";
import Vision from "../../assets/images/Vision.svg";

const About = () => {
  return (
    <>
      <div className="row" style={{ marginTop: "8rem" }}>
        <div className="col-md-6 leftSide">
          <label className="about-servi-label mt-4 green-background">
            About SERVII
          </label>
          <br />
          <br />
          We are a bunch of young enthusiastic team from <b>
            NIT Allahabad
          </b>{" "}
          and <b>NIT Warangal -</b> on a mission to make Gated Community ready
          for tomorrow, by creating a real time Vehicle Service Infrastructue
          (VSI).
          <br />
          <br />
          The Vehicle Service Infrastructure (VSI) is pioneered on a vehicle
          management platform that is for, by and of vehicle owners. It connect
          you to other vehicle owners, service garages, wahsers, accesory
          providers and everything else automobile.
        </div>
        <div className="col-md-6 mt-4 rightSide">
          <div className="frame">
            <img src={Frame} className="card-img-top" alt="Frame" />
          </div>
        </div>
      </div>
      <div className="row" style={{ marginTop: "7rem" }}>
        <div className="col-md-6">
          <div className="card vision-card">
            <img src={Vector} className="card-img-top vector" alt="Vector" />
            <div className="card-body">
              <h6 className="card-title Vision-title">Our Long Term Vision</h6>
              <p className="vision-text">
                To create a complete tech stack for Vehicle service
                infrastructure specific for communities, which will be pioneered
                on a marketplace that host multiple collaborators, who then
                provide domain-specific services, on our Vehicle Management
                Product. <br /> <br />
                We believe the future of urbanization has been and will be Gated
                Communities, which will house the upcoming urban population.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card vision-card">
            <img src={Vision} className="card-img-top vector" alt="Vision" />
            <div className="card-body">
              <h6 className="card-title Vision-title">
                Our Guiding Principles
              </h6>
              <p className="vision-text">
                When we started out, we had only one guiding light - To build
                the most compelling & trusted service experience. One year
                later, it still remains the most important principle that we
                lean on. Almost every decision we make within the company is
                based on how it would impact our customers. Whether we have to
                plan the product roadmap or our next hire - customers & service
                experience are always at the heart of everything we do.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="header green-background">Our Team</div>
      <div className="row" style={{ marginBottom: "10rem" }}>
        <div className="col-md-4">
          <div className="card team-card">
            <img src={Tenul} className="team-img" alt="Tenul" />
            <div className="card-body">
              <p className="team-title">Tenul Singh</p>
              <p className="team-text">
                Co-founder,CEO <br /> NIT Allahabad
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card team-card">
            <img src={Abdul} className="team-img" alt="Tenul" />
            <div className="card-body">
              <p className="team-title">Md.Abdul Haseeb</p>
              <p className="team-text">
                Co-founder,COO <br />
                NIT Warangal
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card team-card">
            <img src={Vishal} className="team-img" alt="Tenul" />
            <div className="card-body">
              <p className="team-title">Vishal Adarsh</p>
              <p className="team-text">
                Co-founder,CPO/CTO <br /> NIT Allahabad
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
