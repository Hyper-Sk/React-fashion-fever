import React from "react";
import './subscribe.css'

const Subscribe = () => {
  return (
    <section className="subscribe">
      <form className="subscribe-content">
        <h3>Subscibe now & Get 20% off</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, sit!
        </p>

        <div className="input-field">
          <input type="text" placeholder="Enter Your Email" />
          <button type="submit">Subscribe</button>
        </div>
      </form>
    </section>
  );
};

export default Subscribe;
