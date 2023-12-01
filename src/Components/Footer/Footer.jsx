import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleEmailClick = () => {
    const emailAddress = 'info@greenvoyages.lk';
    window.location.href = `mailto:${emailAddress}`;
  };

  const openUrl = (url) => {
    window.open(url, '_blank');
  }

  const handlePhoneClick = () => {
    const phoneNumber = '+94114500025'; 
    window.location.href = `tel:${phoneNumber}`;
  };
  return (
    <div className="footer__container">
      <div className="footer__section">
        <div className="footer__section-1">
          <img src={'ico_mail.png'} alt="Email" />
          <h3>MAIL US</h3>
          <h4>info@greenvoyages.lk</h4>
          <p>
            You can directly send us your inquiries via email or thru our
            website, and one of our representatives will get in touch with you
            shortly.
          </p>
          <button onClick={handleEmailClick}>Email</button>
        </div>
        <div className="footer__section-2">
          <img src={'ico_pin.png'} alt="Visit Us" />
          <h3>VISIT US</h3>
          <h4>
            No. 176/1/E, Pannipitiya Road, Thalawathugoda, Colombo, Sri Lanka
          </h4>
          <p>
            Already in Colombo? Pay us a visit at your convenience to get your
            trip started.
          </p>
          <button onClick={() => openUrl('https://maps.app.goo.gl/GV7KDoxdwUb5DZxJ7')}>Map</button>
        </div>
        <div className="footer__section-3">
          <img src={'ico_call.png'} alt="Call Us" />
          <h3>CONTACT US</h3>
          <h4>+94 11 45000 25</h4>
          <p>
            Give us a ring with your inquiries and our agents will brief you on
            services and tailor made packages.
          </p>
          <button onClick={handlePhoneClick}>Call Us</button>
        </div>
      </div>
      <div className="footer__body">
        <div className="footer__body-links">
          <div className="footer_img">
            <img src={'logo__75.png'} alt="Green Voyages logo" />
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
            <img src={'ico_fb.png'} alt="Facebook" onClick={() => openUrl('https://www.facebook.com/GreenVoyagesSriLanka')} />
            <img src={'ico_ig.png'} alt="Instagram" onClick={() => openUrl('https://www.instagram.com/greenvoyagessrilanka/')} />
            <img src={'ico_tw.png'} alt="Twitter" onClick={() => openUrl('https://twitter.com/green_voyages?lang=en')} />
            <img src={'ico_yt.png'} alt="Youtube" onClick={() => openUrl('https://www.youtube.com/channel/UCuxaZiZB7kXS6gV3l00QJdA')} />
            <img src={'ico_advisor.png'} alt="TripAdvisor" onClick={() => openUrl('https://www.tripadvisor.com/Attraction_Review-g293962-d15214120-Reviews-Green_Voyages_Sri_Lanka-Colombo_Western_Province.html')} />
          </div>
        </div>
        <div className="footer_cc">
          <img src={'footer_line.png'} alt="break line" />
          <p>© 2023 Green Voyages(Pvt)Ltd. All Rights Reserved. UX Design & Development by <span className="sadiz" onClick={() => openUrl('https://www.linkedin.com/in/sadishruhunage/')}>TownXara</span></p>
        </div>
        <div className="footer_background">
          <img src={'bg__footer.png'} alt="explore sri lanka tour packages surf beach" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
