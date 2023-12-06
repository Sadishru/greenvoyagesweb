import React from "react";
import "./aboutus.css";
import Footer from "../../Components/Footer/Footer";

const AboutUs = () => {
  const openUrl = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div className="aboutus__container">
      <div className="aboutus__hero">
        <div className="aboutus__hero-texts">
          <h1>
            AYUBOWAN!
            <br />
            WE ARE <span>GREEN VOYAGES</span>
          </h1>
          <p>
            Green Voyages is a Tourist Company based in Sri Lanka which
            organises and plans Holidays for both locals and foreigners in a
            professional and friendly manner!
          </p>
        </div>
        <div className="aboutus__hero-img">
          <img
            src={"/us_hero.png"}
            alt="arugambay beach Galle and Colombo tour"
          />
        </div>
      </div>
      <div className="aboutus__story">
        <div className="aboutus__story-img">
          <img src={"/us_story.png"} alt="tourists getting into travel bus" />
        </div>
        <div className="aboutus__story-texts">
          <h1>OUR STORY</h1>
          <p>
            What really drives our passion at Green Voyages is the satisfaction
            we get in helping you create the best get-away possible! Our
            motivation is fuelled by ensuring that you make memories that will
            last a lifetime though an experience that you will never forget!
            <br />
            <br />
            With over 10 years in the Travel & Tourism Industry, we at Green
            Voyages specialise in creating and engineering wonderful vacations
            for you and your loved ones by taking you on a journey through the
            paradise island of Sri Lanka! With thousands of organised trips
            under our belt and thousands of happy travellers, we continue on our
            journey to ensure that you get the best holiday through us!
          </p>
        </div>
      </div>
      <div className="aboutus__diaries">
        <h1>GREEN VOYAGES TRAVEL DIARIES</h1>
        <div className="diaries__kandytemple">
          <div className="diaries__texts">
            <h3>Exquisite Kandy</h3>
            <div className="youtube__links">
              <img src={"/travel_yt.png"} alt="Green Voyages Youtube" />
              <p onClick={() => openUrl("https://youtu.be/pHa1H8660FQ?si=OEPFSiApWnyVTVwn")}>Watch On Youtube</p>
            </div>
          </div>
        </div>
        <div className="diaries__dambulla">
          <div className="diaries__texts">
            <h3>Dambulla, Sri Lanka</h3>
            <div className="youtube__links" >
              <img src={"/travel_yt.png"} alt="Green Voyages Youtube" />
              <p onClick={() => openUrl("https://youtu.be/8x4tDdR64iQ?si=4MRts82I7JbFf23a")}>Watch On Youtube</p>
            </div>
          </div>
        </div>
        <div className="diaries__kandy">
        <div className="diaries__texts">
            <h3>Kandy, Sri Lanka</h3>
            <div className="youtube__links">
              <img src={'/travel_yt.png'} alt="Green Voyages Youtube" />
              <p onClick={() => openUrl("https://youtu.be/R-TRfbU2jQY?si=GCfuLPIXDGq8jEIh")}>Watch On Youtube</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
