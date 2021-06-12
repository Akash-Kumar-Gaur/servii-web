import React from "react";
import "./ContactUs.css";
import mail from "../../assets/images/ContactUsImg/mail.svg";
import home_24px from "../../assets/images/ContactUsImg/home_24px.svg";
import phone_24px from "../../assets/images/ContactUsImg/phone_24px.svg";
import img1 from "../../assets/images/ContactUsImg/img1.svg";

const ContactUs = () => {
  return (
    <div className="contact-us-container" style={{ marginTop: '9rem' }}>
      <div className="header green-background">Contact Us</div>
      {/* conatct us cards start */}
      <div className="row">
        <div className="col-md-6">
          <div className="card" style={{
            padding: '10px'
          }}>
            <img src={mail} className="email-img" alt="mail" />
            <div className="card-body">
              <p className="card-text">support@servii.in</p>
            </div>
          </div>
          <div className="card" style={{
            padding: '10px'
          }}>
            <img src={phone_24px} className="email-img" alt="tele" />
            <div className="card-body">
              <p className="card-text">+91 - 7054314613 / 7013827615</p>
            </div>
          </div>
          <div className="card" style={{
            padding: '10px'
          }}>
            <img src={home_24px} className="email-img" alt="home" />
            <div className="card-body">
              <p className="card-text">
                Servii Automotives Solutions Pvt. Ltd., 1035,HSR Layout,
                Bangalore
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6" style={{ textAlign: "center" }}>
          <img src={img1} className="card-img-top img1" alt="img1" />
        </div>
      </div>
      {/* contact us cards end */}
      {/* FAQs section start */}
      <div className="header green-background">FAQs</div>
      <div className="card" style={{ padding: "24px" }}>
        <div className="card-body">
          <h5 className="card-title">What is Servii ?</h5>
          <p className="card-text">
            Servii is designed to be your pocket vehicle management companion,
            specifically catering towards your vehicle needs in gated
            communities in the shortest time possible. Some services we offer:
            Daily Cleaning, Sanitisation & Maintenance, Breakdown & Puncture
            Assistance, Repairs & General Service, Roadside Assistance etc. We
            are your community auto - partner.
          </p>
        </div>
      </div>
      <div className="card" style={{ padding: "24px" }}>
        <div className="card-body">
          <h5 className="card-title">Where can I get the app?</h5>
          <p className="card-text">
            The app is available for download from the Google Play Store for
            Android devices only. An IOS version will be released shortly on the
            App store. To be able to fully utilize and experience the benefits
            of Servii, please contact us to get your residential community with
            us.
          </p>
        </div>
      </div>
      <div className="card" style={{ padding: "24px" }}>
        <div className="card-body">
          <h5 className="card-title">What aspects are covered in the demo?</h5>
          <p className="card-text">
            Our vehicle daily sanitisation & cleaning demo covers our patented
            cleaning process perfected over the years. Our product demo uncovers
            the full potential of the Servii app and how to effectively utilise
            it. We don't charge for our demos. To book your free demo, click
            here.
          </p>
        </div>
      </div>
      <div className="card" style={{ padding: "24px" }}>
        <div className="card-body">
          <h5 className="card-title">
            How many days will it take to do the onboarding?
          </h5>
          <p className="card-text">
            For communities newly onboarded to the Servii platform, 7 - 10 days
            are required for intiating operations. For communities already on
            the Servii platform, the onboarding is immediate.
          </p>
        </div>
      </div>
      <div className="card" style={{ padding: "24px" }}>
        <div className="card-body">
          <h5 className="card-title">
            What type of services are offered by Servii?
          </h5>
          <p className="card-text">
            "The gated communities part of the Servii platform are offered the
            following services 24/7: <br />
            -Daily Car Cleaning & Sanitization <br />
            -Doorstep General Services for Cars/Two - Wheelers <br />
            -Pickup & Drop facility <br />
            -Vehicle Accessories <br />
            -Road side assistance <br />
            -Breakdown services with a maximum response time of 30 minutes
          </p>
        </div>
      </div>
      <div className="card" style={{ padding: "24px" }}>
        <div className="card-body">
          <h5 className="card-title">
            Will our personal data be secure on Servii?
          </h5>
          <p className="card-text">
            We use reasonable safeguards to preserve the integrity and security
            of your information against loss, theft, unauthorised access,
            disclosure, reproduction, use or amendment. For more details, read
            our Privacy Policy.
          </p>
        </div>
      </div>
      <div className="card" style={{ padding: "24px", marginBottom: "10rem" }}>
        <div className="card-body">
          <h5 className="card-title">
            Can I use Servii if i’m not a GC - resident or Servii is not part of
            my community?
          </h5>
          <p className="card-text">
            You can bring servii easily to your community-Refer your society.
            For Non-GC user’s we can assist you in certain services if you’re
            situated in region/area near existing servii community .
          </p>
        </div>
      </div>
      {/* FAQs section end */}
    </div>
  );
};

export default ContactUs;
