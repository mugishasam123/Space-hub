import React from "react";
import './styles/rocket.css'
const Rocket = ({rocket}) => {
  return (
    <div className="rocket">
      <img src={rocket.image} alt="" className="rocket-image"/>
      <div className="details">
        <h3 className="title">{rocket.name}</h3>
        <p className="description">{rocket.description}</p>
        <button className="reserve-cancel">Reserve Rocket</button>
      </div>
    </div>
  );
};

export default Rocket;
