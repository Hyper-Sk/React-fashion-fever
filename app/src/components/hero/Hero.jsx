import React from "react";
import "./hero.css";
import { Link } from "react-router-dom";
import heroImg1 from "./../../assets/hero/hero-img-1.jpg";
import heroImg2 from "./../../assets/hero/hero-img-2.jpg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="left">
          <div className="box">
          <h3>Our Best Products</h3>
          <h2>Latest Arrivals</h2>
          <Link to="/products">Shop Now</Link>
          </div>
        </div>
        <div className="right">
          <img src={heroImg2} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
