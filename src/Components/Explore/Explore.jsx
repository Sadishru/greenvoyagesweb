import React from "react";
import "./explore.css";

const Explore = () => {
  
  return (
    <div className="explore__container">
      <div className="explore__hero">
        <div className="hero__texts">
          <h1>
            Sri Lanka,
            <br />
            The Paradise <br /> Island
          </h1>
          <p>
            Explore the wonders of the South Asian Gem,
            <br />
            from sandy beaches to wilderness with
            <br />
            mesmerizing cuisines and rich heritage.
          </p>
        </div>
        <div className="hero__img">
          <img src={"exp_srilanka.png"} />
        </div>
      </div>
      <div className="explore__sigiriya">
        <div className="sigiriya__img">
          <img
            src={"exp_sigiriya.png"}
            alt="The ancient rock forest, Sigiriya"
          />
        </div>
        <div className="sigiriya__body">
          <h1>The Ancient Rock Forest, Sigiriya</h1>
          <p>
            Located in the Sri Lankan Cultural Triangle, lies the 8th
            <br />
            Wonder of the World, namely Sigiriya Rock Fortress. Once known to be
            the Stronghold and Palace of King Kashayapa, this magnificent
            fortress beholds for us the amazing architecture of the year 477 –
            495 AD.
          </p>
          <div className="sigiriya__body-imgs">
            <img src={"exp_sigiriya1.png"} alt="sigiriya rock forest" />
            <img
              src={"exp_sigiriyaart.png"}
              alt="sigiriya wall art bithu sithuwam"
            />
            <img src={"exp_sigiriyarock.png"} alt="sigiriya rock" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
