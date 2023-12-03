import React, { useEffect } from "react";
import "./itenerary.css";
import { useParams, Link } from "react-router-dom";

const Itenerary = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openUrl = (url) => {
    window.open(url, "_blank");
  };

  const handleEmailClick = () => {
    const emailAddress = "info@greenvoyages.lk";
    window.location.href = `mailto:${emailAddress}`;
  };

  const handlePhoneClick = () => {
    const phoneNumber = "+94114500025";
    window.location.href = `tel:${phoneNumber}`;
  };

  const packageData = [
    {
      image: "/featured_turtle.png",
      name: "Serenity Escape Tour",
      hook: "A laidback exploration into Kandy's cultural richness, Nuwara Eliya's beauty, Bentota's beaches, and Colombo's vibrant charm.",
      userId: "serenity-escape",
      day1: "Day 01: Arrive at the airport, visit Pinnawela Elephant Orphanage, and travel to Kandy. En-route, explore a Spice Garden. In Kandy, tour the city, including the Temple of the Sacred Tooth Relic, and enjoy a cultural dance performance.",
      day2: "Day 02: Visit Peradeniya Botanical Gardens, then head to Nuwara Eliya for a city tour.",
      day3: "Day 03: Journey to Bentota, visit a Turtle Hatchery, and relax on the beach.",
      day4: "Day 04: Depart for Colombo, stopping for a boat ride in Madu Ganga. Explore Colombo's city, including a shopping tour.",
      day5: "Day 05: Depart from Colombo to the airport.",
      day6: "",
      day7: "",
      day8: "",
      day9: "",
      day10: "",
    },
    {
      image: "/featured_seenigama.png",
      name: "Ramayana Tour",
      hook: "Sri Lanka's Ramayana Odyssey: A Mythical Journey unveiling ancient temples, divine landscapes and legends.",
      userId: "ramayana-tour",
      day1: "Day 01: Arrive at Colombo Airport, check in to hotel in Negombo, visit the Fish Market, and witness the Dutch Canal.",
      day2: "Day 02: Explore Chilaw, visit Muneeshwaram and Manavari Temples, and then head to Kandy, visit Pinnawala Elephant Orphanage.",
      day3: "Day 03: Journey to Nuwara Eliya, visit Sri Baktha Hanuman Temple, and explore Gayathri Peedam.",
      day4: "Day 04: Travel to Bandarawela, visit Seetha Amman Temple and Divurumpola.",
      day5: "Day 05: Proceed to Kataragama, visit Ravana Ella & Ravana Cave.",
      day6: "Day 06: Visit Kataragama Shrine and Ussanggoda, then leave for Colombo, visiting Rumasela, Seenigama Temple, and Panchamuga Anjaneyar Temple.",
      day7: "Day 07: Explore Colombo, visit Panchamuga Anjaneyar Temple, and depart from Colombo Airport.",
      day8: "",
      day9: "",
      day10: "",
    },
    {
      image: "/featured_honeymoon.png",
      name: "Honeymoon Tour",
      hook: "A magical honeymoon in Sri Lanka, where gentle giants, ancient wonders, and romantic adventures await.",
      userId: "honeymoon-tour",
      day1: "Day 01: Arrive at Colombo Airport, visit Pinnawela Elephant Orphanage, and climb Sigiriya Rock Fortress. Stay overnight in Sigiriya.",
      day2: "Day 02: Hot Air Balloon Ride in Sigiriya, explore Anuradhapura, and enjoy an evening lakeside walk. Stay overnight in Anuradhapura.",
      day3: "Day 03: Travel to Sigiriya, experience Elephant Back Ride, and boat ride at Kandalama Lake. Stay overnight in Sigiriya.",
      day4: "Day 04: Visit Dambulla Temple, proceed to Kandy, visit Mawanella Spice Garden, and explore Kandy. Stay overnight in Kandy.",
      day5: "Day 05: Tour Peradeniya Botanical Gardens, visit Nuwara Eliya in the evening. Stay overnight in Nuwara Eliya.",
      day6: "Day 06: Journey to Yala, enjoy an evening safari. Stay overnight in Yala.",
      day7: "Day 07: Head to Bentota, visit Kosgoda Turtle Hatchery. Stay overnight in Bentota.",
      day8: "Day 08: Experience a boat ride in Madu Ganga and enjoy water sports in Bentota. Stay overnight in Bentota.",
      day9: "Day 09: Depart for Colombo, explore the city, and indulge in shopping. Stay overnight in Colombo.",
      day10: "Day 10: Depart from Colombo Airport after breakfast.",
    },
    {
      image: "/featured_kataragama.png",
      name: "Hindu Tour",
      hook: "Embark on a divine journey through sacred Hindu sites in Sri Lanka, where ancient temples and spiritual wonders await.",
      userId: "hindu-tour",
      day1: "Day 01: Arrive at Colombo Airport, visit Munneswaram Temple, and explore Anuradhapura's ancient treasures.",
      day2: "Day 02: Head to Mannar, visit Thirukethiswaram Temple, and proceed to Trincomalee.",
      day3: "Day 03: Visit Koneswaram Temple, then travel to Kandy for a city tour and the Temple of the Sacred Tooth Relic.",
      day4: "Day 04: Journey to Nuwara Eliya, visit Ramboda Falls and Hanuman Temple. Continue to Katharagama, visit the temple.",
      day5: "Day 05: Depart to Colombo, enjoy a city tour, and shopping.",
      day6: "Day 06: Head to the airport for departure.",
      day7: "",
      day8: "",
      day9: "",
      day10: "",
    },
    {
      image: "/package_honeymoonbliss.png",
      name: "Honeymoon Bliss Tour",
      hook: "Cherish love in Sri Lanka's marvels, exploring ancient sites, cold Nuwara Eliya, and watching turtles hatch.",
      userId: "honeymoon-bliss",
      day1: "Day 01: Arrive at Colombo Airport, visit Pinnawala Elephant Orphanage, and travel to Kandy with a stop at a Spice Garden. Evening visit to Kandy Temple.",
      day2: "Day 02: Explore Peradeniya Botanical Gardens, Kandy city, and witness a Cultural Dance Show.",
      day3: "Day 03: Head to Nuwara Eliya, witness waterfalls, and explore the city.",
      day4: "Day 04: Travel to Bentota, visit a Turtle Hatchery, and relax on the beach.",
      day5: "Day 05: Proceed to Colombo, En route a boat ride in Madu Ganga, followed by a city tour and shopping.",
      day6: "Day 06: Depart from Colombo Airport after breakfast.",
      day7: "",
      day8: "",
      day9: "",
      day10: "",
    },
    {
      image: "/package_heritage.png",
      name: "Heritage Tour",
      hook: "A captivating journey through Sri Lanka's cultural tapestry, from elephant sanctuaries to colonial gems.",
      userId: "heritage-tour",
      day1: "Day 01: Arrive at Colombo Airport, proceed to Pinnawala Elephant Orphanage, and travel to Kandy via a Spice Garden visit. Dinner and overnight stay in Kandy.",
      day2: "Day 02: Explore Kandy, including the Temple of the Sacred Tooth Relic and Cultural Dance Performance. Dinner and overnight stay in Kandy.",
      day3: "Day 03: Visit Peradeniya Botanical Gardens and travel to Nuwara Eliya for a city tour. Dinner and overnight stay in Nuwara Eliya.",
      day4: "Day 04: Head to Bentota, visit Turtle Hatchery, and enjoy leisure on the beach. Dinner and overnight stay in or around Bentota.",
      day5: "Day 05: Depart for Colombo, with a boat ride in Madu Ganga en route. Explore Colombo, including shopping. Dinner and overnight stay in Colombo.",
      day6: "Day 06: Depart from Colombo to the airport.",
      day7: "",
      day8: "",
      day9: "",
      day10: "",
    },
    {
      image: "/package_tropical.png",
      name: "Tropical Bliss Tour",
      hook: "Covering hill country to down south, immerse in history, nature, and vibrant traditions on this unforgettable journey.",
      userId: "tropical-bliss",
      day1: "Day 01: Arrive at Colombo Airport, visit Pinnawala Elephant Orphanage, and travel to Kandy, visit a Spice Garden. Dinner & overnight stay in Kandy.",
      day2: "Day 02: Explore Kandy, including the Temple of the Sacred Tooth Relic and a Kandy Cultural Dance Performance. Dinner & overnight stay in Kandy.",
      day3: "Day 03: Visit Peradeniya Botanical Gardens, then travel to Nuwara Eliya. Evening city tour in Nuwara Eliya. Dinner & overnight stay.",
      day4: "Day 04: Depart to Bentota, visit Turtle Hatchery, and enjoy leisure on the beach. Dinner & overnight stay in or around Bentota.",
      day5: "Day 05: Explore Galle, including a boat ride in Madu Ganga and visit Galle Dutch Fort. Return to Bentota for dinner & overnight stay.",
      day6: "Day 06: Head to Colombo for a city tour and shopping. Dinner & overnight stay in Colombo.",
      day7: "Day 07: Depart from Colombo to the airport.",
      day8: "",
      day9: "",
      day10: "",
    },
  ];

  const { userId } = useParams();

  const selectedPackage = packageData.find((item) => item.userId === userId);

  return (
    <div className="itenerary__container">
      <div className="itenerary__img">
        <img src={selectedPackage.image} alt={selectedPackage.name} />
        <p>**Children under 6 are admitted free of charge.</p>
        <div className="itenerary__img-links">
          <div className="itenerary__img-links_contact">
            <div className="itenerary__call">
              <img src={"/ico_call2.png"} alt="info@greenvoyages.lk" />
              <p onClick={handlePhoneClick}>+94 11 45000 25</p>
            </div>
            <div className="itenerary__mail">
              <img src={"/ico_mail2.png"} alt="info@greenvoyages.lk" />
              <p onClick={handleEmailClick}>info@greenvoyages.lk</p>
            </div>
            <div
              className="itenerary__google"
              onClick={() =>
                openUrl(
                  "https://www.google.com/search?q=green+voyages+sri+lanka&rlz=1C1KNTJ_enLK1078LK1078&oq=gree&gs_lcrp=EgZjaHJvbWUqDggCEEUYJxg7GIAEGIoFMgYIABBFGDwyBggBEEUYOTIOCAIQRRgnGDsYgAQYigUyBggDEEUYOzIOCAQQRRgnGDsYgAQYigUyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQgzNTkwajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x3ae25a490cc58b7b:0xf02ff928085a3a08,1,,,,"
                )
              }
            >
              <img src={"/ico_google.png"} alt="google" />
              <p>Explore Google Reviews</p>
            </div>
          </div>
        </div>
      </div>
      <div className="itenerary__body">
        <h1>{selectedPackage.name}</h1>
        <p>{selectedPackage.hook}</p>
        <div className="itenerary__body-text">
          <img src={"/itenerary_tour.png"} />
          <h3>Tour Itinerary</h3>
        </div>
        <div className="itenerary__body-days">
          <p>{selectedPackage.day1}</p>
          <p>{selectedPackage.day2}</p>
          <p>{selectedPackage.day3}</p>
          <p>{selectedPackage.day4}</p>
          <p>{selectedPackage.day5}</p>
          <p>{selectedPackage.day6}</p>
          <p>{selectedPackage.day7}</p>
          <p>{selectedPackage.day8}</p>
          <p>{selectedPackage.day9}</p>
          <p>{selectedPackage.day10}</p>
        </div>
        <div className="itenerary__body-cta">
          <Link to="/contactus">
            <button>Inquiry</button>
          </Link>
          <Link to="/packages">
            <button>Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Itenerary;
