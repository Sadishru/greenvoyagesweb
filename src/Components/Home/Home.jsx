import React from "react";
import "./home.css";
import Location from "../../SubComponents/Location/Location";
import Package from "../../SubComponents/Package/Package";
import Form from "../../SubComponents/Form/Form";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  const openUrl = (url) => {
    window.open(url, "_blank");
  };

  const slidesData = [
    {
      imgUrl: "home__bg__arugambaybeach.png",
    },
    {
      imgUrl: "slide_sigiriya.jpg",
    },
    {
      imgUrl: "slide_hikkaduwa.jpg",
    },
    {
      imgUrl: "slide_kandy.jpg",
    },
  ];

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
  ];

  const reviewData = [
    {
      img: "home__jasmine.png",
      text: '"Kudos Green Voyages for excellent services rendered! Our holidays ran seamlessly, with no problems. All demands were accepted unconditionally, tour was planned meticulously and all communications were answered quickly and efficiently. Mr Mark the manager and our tour guide Mr Lal were extremely kind and helpful and catered to all our needs!"',
      name: "- Jasmine Moreira, India",
    },
    {
      img: "home__divya.png",
      text: '"We have enjoyed a lot. it\'s a well organised tour. Mr Lal is the best and taken good care of all of us.. Special thanks to Lal Bhai.. Very happy with the hotels, locations, vehicle and sightseeing they organised. Thank you Green Voyages.. I will recommend Green Voyages for the beautiful memories of Srilanka and pleasant stay...😍 Thank you for the great service."',
      name: "- Divya Rao, India",
    },
    {
      img: "home__amelia.png",
      text: '"My husband and I decided to visit Sri Lanka on our Honeymoon, and at first were quite unfamiliar with what to do. When we found Green Voyages, they made our Honeymoon so much easier and so much more special! We didn\'t have to worry about a thing because they organised the whole trip and executed their services with high levels of professionality!" ',
      name: "-Amelia, USA",
    },
  ];

  return (
    <div className="home__container">
      <div className="home__container-hero">
        <swiper-container
          slidesPerView={1}
          loop={false}
          autoplay={true}
          effect="fade"
        >
          {slidesData.map((slide, index) => (
            <swiper-slide key={index}>
              <div
                className="home__container-hero_slides"
                style={{
                  backgroundImage: `url("${slide.imgUrl}")`,
                  backgroundSize: "cover",
                  position: "relative",
                  height: "90vh",
                }}
              >
                <div className="home__container-hero_body">
                  <h1>
                    Sri Lanka Tours,
                    <br />
                    Craft Your Holiday Getaway
                  </h1>
                  <div className="home__container-hero_cta">
                    <Link to={"/explore"}>
                      <button>EXPLORE SRI LANKA</button>
                    </Link>
                    <Link to={"/contactus"}>
                      <button>INQUIRY</button>
                    </Link>
                  </div>
                </div>
              </div>
            </swiper-slide>
          ))}
        </swiper-container>
      </div>
      <div className="home__container-locations">
        <img
          className="attractions"
          src={"/home__srilankan.png"}
          alt="srilankan attractions"
        />
        <div className="locations__grid">
          <Link className="gridItem" to="/explore">
            <Location
              img={"/home__sigiriya.png"}
              text="The Ancient Rock Forest, Sigiriya"
            />
          </Link>
          <Link className="gridItem" to="/explore">
            <Location img={"/home__lotusup.png"} />
          </Link>
          <Link className="gridItem" to="/explore">
            <Location img={"/home__galle.png"} text="Galle, Sri Lanka" />
          </Link>
        </div>
        <div className="locations__gridb">
          <Link className="gridItemBtm" to="/explore">
            <Location
              img={"/home__kandytemple.png"}
              text="The Temple of the Tooth Relic, Kandy"
            />
          </Link>
          <Link className="gridItemBtm" to="/explore">
            <Location
              img={"/home__lotusdown.png"}
              text="Lotus Tower, Colombo"
            />
          </Link>
          <Link className="gridItemBtm" to="/explore">
            <Location
              img={"/home__galleface.png"}
              text="Galleface Green, Colombo"
            />
          </Link>
        </div>
      </div>
      <div className="home__container-process">
        <h1>
          SIMPLIFY YOUR JOURNEY WITH <br />
          OUR TOUR PROCESS
        </h1>
        <div className="process_body">
          <div className="process_body-details">
            <div className="process_body-details1">
              <div className="process_body-details1_num">
                <img src={"/ico_1.png"} alt="feature1" />
              </div>
              <div className="process_body-details1_info">
                <h2>Select a Package or Inquire</h2>
                <p>
                  Your perfect Sri Lankan adventure starts here. Share your
                  
                  tour preferences or Select a tailor made tour package
                  from our Packages.
                </p>
                <div className="process_body-details1_info-btns">
                  <Link to={"/packages"}>
                    <button>PACKAGES</button>
                  </Link>
                  <Link to={"/contactus"}>
                    <button>INQUIRY</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="process_body-details2">
              <div className="process_body-details2_num">
                <img src={"/ico_2.png"} alt="feature2" />
              </div>
              <div className="process_body-details2_info">
                <h2>Let Us Take Care of The Rest</h2>
                <div className="process_body-details2_info-rest">
                  <span>
                    <img src={"/ico_tick.png"} alt="tour_features" />
                  </span>
                  <p>Airport Pickup & Drop</p>
                </div>
                <div className="process_body-details2_info-rest">
                  <span>
                    <img src={"/ico_tick.png"} alt="tour_features" />
                  </span>
                  <p>Private Vehicle with a Chauffeur</p>
                </div>
                <div className="process_body-details2_info-rest">
                  <span>
                    <img src={"/ico_tick.png"} alt="tour_features" />
                  </span>
                  <p>Tour Guide</p>
                </div>
                <div className="process_body-details2_info-rest">
                  <span>
                    <img src={"/ico_tick.png"} alt="tour_features" />
                  </span>
                  <p>Hotel Accommodation & Meals</p>
                </div>
              </div>
            </div>
          </div>
          <div className="process_body-img">
            <img src={"/home__process.png"} />
          </div>
        </div>
      </div>
      <div className="home__container-featured">
        <div className="home__container-featured-head">
          <h1>Featured Packages</h1>
          <Link to={"/packages"}>
            <button>Explore More</button>
          </Link>
        </div>
        <div className="home__container-featured-body">
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
      </div>
      <div className="home__container-reviews">
        <div className="reviews__head">
          <h1>TOUR REVIEWS</h1>
          <button
            onClick={() =>
              openUrl(
                "https://www.google.com/search?q=green+voyages+sri+lanka&rlz=1C1KNTJ_enLK1078LK1078&oq=gree&gs_lcrp=EgZjaHJvbWUqDggCEEUYJxg7GIAEGIoFMgYIABBFGDwyBggBEEUYOTIOCAIQRRgnGDsYgAQYigUyBggDEEUYOzIOCAQQRRgnGDsYgAQYigUyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQgzNTkwajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x3ae25a490cc58b7b:0xf02ff928085a3a08,1,,,,"
              )
            }
          >
            Google Reviews
          </button>
        </div>
        <div className="reviews__body">
          {reviewData.map((review, index) => (
            <div key={index} className="reviews__body-content">
              <img src={review.img} alt="review user photo" />
              <p>{review.text}</p>
              <p className="reviews__body-content_name">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="home__container-inquiries">
        <div className="inquiries__img">
          <img src={"home__craft.png"} alt="sri lanka tea plantation" />
        </div>
        <div className="inquiries__body">
          <h1>CRAFT YOUR HOLIDAY |<br/>INQUIRIES</h1>
          <Form />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
