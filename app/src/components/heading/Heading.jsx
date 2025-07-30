import React from "react";
import './heading.css'

const Heading = ({ heading, desc }) => {
  return (
    <section className="heading">
      <h2>{heading}</h2>
      <p>{desc}</p>
    </section>
  );
};

export default Heading;
