import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Explore,
  Packages,
  AboutUs,
  FAQ,
  ContactUs,
  Navbar,
} from "./Components";
import Chat from './SubComponents/Chat/Chat';
import { register } from 'swiper/element/bundle';
register();


const App = () => {
  return (
    <>
      <Navbar />
      <Chat />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore/*" element={<Explore />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </>
  );
};

export default App;
