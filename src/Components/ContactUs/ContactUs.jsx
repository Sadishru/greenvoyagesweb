import React from "react";
import "./contactus.css";
import Form from '../../SubComponents/Form/Form';
import { Link } from "react-router-dom";

const ContactUs = () => {
  const openUrl = (url) => {
    window.open(url, '_blank');
  }
  return (
    <div className="contactus__container">
      <div className="contactus__hero">
        <div className="contactus__hero-head">
          <h1>GET IN TOUCH</h1>
          <p>Our dedicated agents are committed 24/7 to provide service.</p>
        </div>
        <div className="contactus__hero-body">
          <div className="contactus__hero-body_texts">
            <div className="body__texts-text">
              <img src={"/contact_call.png"} alt="call us" />
              <h3>+94 11 45000 25</h3>
            </div>
            <div className="body__texts-text">
              <img src={"/contact_mail.png"} alt="Email us" />
              <h3>info@greenvoyages.lk</h3>
            </div>
            <div className="body__texts-text">
              <img src={"/contact_location.png"} alt="Visit us" />
              <h3>
                No. 176/1/E, Pannipitiya Road, Thalawathugoda, Colombo, Sri
                Lanka
              </h3>
            </div>
          </div>
          <div className="contactus__hero-body_img">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.1530505812457!2d79.93390807063645!3d6.87225790384656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25a490cc58b7b%3A0xf02ff928085a3a08!2sGreen%20Voyages%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1701866837949!5m2!1sen!2slk"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="contactus__form">
        <div className="contactus__form-fields">
          <h1>FOR MORE INFORMATION| INQUIRIES</h1>
          <Form />
        </div>
        <div className="contactus__form-img">
          <img src={'/contact_hikkaduwa.png'} />
        </div>
      </div>
      <div className="footer__body">
        <div className="footer__body-links">
          <div className="footer_img">
            <img src={"logo__75.png"} alt="Green Voyages logo" />
          </div>
          <div className="footer_1">
            <Link to="/packages">Packages</Link>
            <Link to="/faq">FAQ</Link>
          </div>
          <div className="footer_2">
            <Link to="/contactus">Contact Us</Link>
            <Link to="/aboutus">About Us</Link>
          </div>
          <div className="footer_3">
            <p>Email : info@greenvoyages.lk</p>
            <p>Phone : +9411450025</p>
          </div>
          <div className="footer_socials">
            <img
              src={"ico_fb.png"}
              alt="Facebook"
              onClick={() =>
                openUrl("https://www.facebook.com/GreenVoyagesSriLanka")
              }
            />
            <img
              src={"ico_ig.png"}
              alt="Instagram"
              onClick={() =>
                openUrl("https://www.instagram.com/greenvoyagessrilanka/")
              }
            />
            <img
              src={"ico_tw.png"}
              alt="Twitter"
              onClick={() =>
                openUrl("https://twitter.com/green_voyages?lang=en")
              }
            />
            <img
              src={"ico_yt.png"}
              alt="Youtube"
              onClick={() =>
                openUrl(
                  "https://www.youtube.com/channel/UCuxaZiZB7kXS6gV3l00QJdA"
                )
              }
            />
            <img
              src={"ico_advisor.png"}
              alt="TripAdvisor"
              onClick={() =>
                openUrl(
                  "https://www.tripadvisor.com/Attraction_Review-g293962-d15214120-Reviews-Green_Voyages_Sri_Lanka-Colombo_Western_Province.html"
                )
              }
            />
          </div>
        </div>
        <div className="footer_cc">
          <img src={"footer_line.png"} alt="break line" />
          <p>
            © 2023 Green Voyages(Pvt)Ltd. All Rights Reserved. UX Design &
            Development by{" "}
            <span
              className="sadiz"
              onClick={() =>
                openUrl("https://www.linkedin.com/in/sadishruhunage/")
              }
            >
              Yaaara
            </span>
          </p>
        </div>
        <div className="footer_background">
          <img
            src={"bg__footer.png"}
            alt="explore sri lanka tour packages surf beach"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
