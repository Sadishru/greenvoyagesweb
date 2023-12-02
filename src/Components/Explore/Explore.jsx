import React from "react";
import "./explore.css";
import Footer from '../../Components/Footer/Footer';

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
      <div className="explore__kandy">
        <div className="kandy__body">
          <h1>The Temple of the Tooth, Kandy</h1>
          <p>
            The Temple of the Tooth Relic stands as a beacon of Buddhist
            reverence, housing the sacred left canine tooth of Lord Buddha. This
            revered relic, brought to Sri Lanka in the 4th century AD, has
            transformed the temple into a pilgrimage <br />
            site for devout Buddhists worldwide.
          </p>
          <div className="kandy__body-imgs">
            <img src={"exp_kandytempleart.png"} alt="Kandy temple wall art" />
            <img
              src={"exp_kandytempledance.png"}
              alt="Kandy Festival street dancer"
            />
          </div>
        </div>
        <div className="kandy__img">
          <img src={"exp_kandy.png"} alt="the temple of tooth kandy" />
        </div>
      </div>
      <div className="explore__lotus">
        <div className="lotus__img">
          <img src={"exp_lotustower.png"} alt="lotus tower colombo" />
        </div>
        <div className="lotus__body">
          <h1>Lotus Tower, Colombo</h1>
          <p>
            The Lotus Tower is a 350-meter-tall communication and observation
            tower in Colombo, Sri Lanka. It is the tallest self-supported
            structure in South Asia and the tallest skyscraper in Sri Lanka. The
            tower is designed to resemble a lotus flower, the national flower of
            Sri Lanka.
          </p>
          <div className="lotus__body-imgs">
            <img src={"exp_lotustower_night.png"} />
            <img src={"exp_gangarama.png"} />
          </div>
        </div>
      </div>
      <div className="explore__galleface">
        <div className="galleface__body">
          <h1>
            GalleFace Green,
            <br /> Colombo
          </h1>
          <p>
            Galle Face Green is a 5 km (3.1 mi) long beachfront urban park, and
            one of the most attractive and popular open spaces in Colombo. The
            green is bordered by the Indian Ocean to the west, the Galle Road to
            the south, and the Colombo Fort to the north. It is a popular spot
            for street food, jogging, cycling, kite flying, and cricket.{" "}
          </p>
          <div className="galleface__body-imgs">
            <img src={"exp_gallefacegreen.png"} alt="Galleface green" />
            <img
              src={"exp_gallefacebridge.png"}
              alt="Galle face green bridge colombo sea"
            />
            <img src={"exp_gallefacecolombo.png"} alt="Galleface Colombo" />
          </div>
        </div>
        <div className="galleface__img">
          <img src={"exp_galleface.png"} alt="galle face colombo sri lanka" />
        </div>
      </div>
      <div className="explore__galle">
        <div className="galle__img">
          <img src={"exp_galle.png"} alt="galle sri lanka" />
        </div>
        <div className="galle__body">
          <h1>
            Galle,
            <br />
            Sri Lanka
          </h1>
          <p>
            Galle is a beautiful city in Sri Lanka located on the south- western
            tip of the island. It is a UNESCO World Heritage Site and is known
            for its Dutch colonial fort, which is one of the largest and
            best-preserved fortifications in Asia. The fort is <br/>a maze of
            cobblestone streets, shops, and restaurants, and it is a popular
            tourist destination.
          </p>
          <div className="galle__body-imgs">
            <img src={'exp_gallelighthouse.png'} alt="Galle light house" />
            <img src={'exp_gallecoconuttrees.png'} alt="Galle coconut tree hill" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Explore;
