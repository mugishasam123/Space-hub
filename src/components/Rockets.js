import React from "react";
import { useSelector } from "react-redux";
import Rocket from "./Rocket";
import "./styles/rockets.css";

const Rockets = () => {
  const data = useSelector((state) => state.rockets);
  return (
    <section className="rockets">
      {data.map((item) => (
        <Rocket key={item.id} rocket={item} />
      ))}
    </section>
  );
};

export default Rockets;
