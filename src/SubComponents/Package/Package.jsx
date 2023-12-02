import React, { useState } from "react";
import "./package.css";
import { useNavigate } from "react-router-dom";

const Package = ({ image, duration, name, hook, userId }) => {
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate(`/packages/${userId}`)
  };

  return (
    <div className="package__container">
      <div className="package__container-img">
        <img src={image} alt="tour package" />
      </div>
      <div className="package__container-duration">
        <h3>{duration}</h3>
      </div>
      <div className="package__container-body">
        <h2>{name}</h2>
        <p>{hook}</p>
          <button onClick={handleViewMore}>View More</button>
      </div>
    </div>
  );
};

export default Package;
