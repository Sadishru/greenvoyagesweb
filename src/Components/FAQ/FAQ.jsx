import React, { useState } from "react";
import "./faq.css";
import Footer from "../../Components/Footer/Footer";

const FAQ = () => {
  const faqsArray = [
    {
      question: "How can I book a tour?",
      answer:
        "You can book a tour by contacting us through our website, email, or phone. We will be happy to answer any questions you have and help you plan your trip.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "30 days prior to arrival - Free of charge; 21 days prior - 50% charge; 14 days prior - Full charge.",
    },
    {
      question: "Do you provide visa assistance?",
      answer:
        "No, we do not provide visa assistance. You will need to obtain a visa before you travel to Sri Lanka.",
    },
    {
      question: "What is included in the tour price?",
      answer:
        "The tour price includes transportation, accommodation, meals, entrance fees to attractions, and the services of a guide.",
    },
    {
      question: "What is not included in the tour price?",
      answer:
        "The tour price does not include airfare, visa fees, travel insurance, and personal expenses.",
    },
    {
      question: "What kind of hotels do you use?",
      answer:
        "We use a variety of hotels, from budget-friendly guesthouses to luxury resorts. We will work with you to find a hotel that meets your budget and taste.",
    },
    {
      question: "What language do your guides speak?",
      answer:
        "Our guides speak English, Tamil and Sinhala. We can also arrange for guides who speak other languages.",
    },
    {
      question: "What currency is used in Sri Lanka?",
      answer: "The Sri Lankan rupee (LKR) is the currency used in Sri Lanka.",
    },
  ];

  const [display, setDisplay] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  return (
    <div className="faqs__container">
      <div className="faqs__container-head">
        <h1>FREQUENTLY ASKED QUESTIONS</h1>
      </div>
      <div className="faqs__container-body">
        {faqsArray.map((faq, index) => (
          <div className="faq__thread" key={index}>
            <div className="faq__thread-q">
              <h3>{faq.question}</h3>
              <button onClick={() => setSelectedQuestion(index)}>
                {selectedQuestion === index ? "-" : "+"}
              </button>
            </div>
            <div>
              {selectedQuestion === index && (
                <h3 className="faq__thread-answer">{faq.answer}</h3>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="footer__faqs">
        <Footer />
      </div>
    </div>
  );
};

export default FAQ;
