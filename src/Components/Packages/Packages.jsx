import React from "react";
import "./packages.css";
import { Link } from "react-router-dom";
import Package from "../../SubComponents/Package/Package";


const Packages = () => {
  const openUrl = (url) => {
    window.open(url, '_blank');
  }
  const packageData = [
    {
      image: "featured_turtle.png",
      duration: "04 Nights 05 Days",
      name: "Serenity Escape Tour",
      hook: "A laidback exploration into Kandy's cultural richness, Nuwara Eliya's beauty, Bentota's beaches, and Colombo's vibrant charm.",
      userId: 'serenity-escape',
    },
    {
      image: "featured_seenigama.png",
      duration: "06 Nights 07 Days",
      name: "Ramayana Tour",
      hook: "Sri Lanka's Ramayana Odyssey: A Mythical Journey unveiling ancient temples, divine landscapes and legends.",
      userId: 'ramayana-tour',
    },
    {
      image: "featured_honeymoon.png",
      duration: "09 Nights 10 Days",
      name: "Honeymoon Tour",
      hook: "A magical honeymoon in Sri Lanka, where gentle giants, ancient wonders, and romantic adventures await.",
      userId: 'honeymoon-tour',
    },
    {
      image: "featured_kataragama.png",
      duration: "05 Nights 06 Days",
      name: "Hindu Tour",
      hook: "Embark on a divine journey through sacred Hindu sites in Sri Lanka, where ancient temples and spiritual wonders await.",
      userId: 'hindu-tour',
    },
    {
      image: "package_honeymoonbliss.png",
      duration: "05 Nights 06 Days",
      name: "Honeymoon Bliss Tour",
      hook: "Cherish love in Sri Lanka's marvels, exploring ancient sites, cold Nuwara Eliya, and watching turtles hatch.",
      userId: 'honeymoon-bliss',
    },
    {
      image: "package_heritage.png",
      duration: "05 Nights 06 Days",
      name: "Heritage Tour",
      hook: "A captivating journey through Sri Lanka's cultural tapestry, from elephant sanctuaries to colonial gems.",
      userId: 'heritage-tour',
    },
    {
      image: "package_tropical.png",
      duration: "06 Nights 07 Days",
      name: "Tropical Bliss Tour",
      hook: "Covering hill country to down south, immerse in history, nature, and vibrant traditions on this unforgettable journey.",
      userId: 'tropical-bliss',
    },
  ];
  return (
    <div className="packages__container">
      <div className="packages__texts">
        <h1>TOUR PACKAGES</h1>
        <h3>
          For Custom Tour Packages - <Link to="/contactus">Click here</Link>
        </h3>
      </div>
      <div className="packages__grid">
        {packageData.map((item, index) => (
          <Package
            key={index}
            image={item.image}
            duration={item.duration}
            name={item.name}
            hook={item.hook}
            userId={item.userId}
          />
        ))}
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

export default Packages;
