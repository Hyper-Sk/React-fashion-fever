import React from "react";
import './why-us.css'

const WhyUs = () => {
  return (
    <section className="why-us">
        <h2>Why Choose Us</h2>
      <div className="why-us-content">
        <div className="col">
          <h3>Quality Assurance:</h3>
          <p>
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards.
          </p>
        </div>
        <div className="col">
          <h3>Convenience:</h3>
          <p>
            With our user-friendly interface and hassle-free ordering process,
            shopping has never been easier.
          </p>
        </div>
        <div className="col">
          <h3>Exceptional Customer Service:</h3>
          <p>
            Our team of dedicated professionals is here to assist you the way,
            ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
