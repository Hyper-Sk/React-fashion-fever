import React,{useEffect} from "react";
import "./about.css";
import Heading from "./../../components/heading/Heading";
import Header from "./../../components/header/Header";
import Subscribe from "./../../components/subscribe/Subscribe";
import Footer from "./../../components/footer/Footer";

import img1 from "./../../assets/about-2.jpg";
import WhyUs from "../../components/why-us/WhyUs";

const About = () => {


  useEffect(() => {
    document.title = "Fever - About"
  },[])
  return (
    <div className="about-page">
      <Header />

      <Heading
        heading={"About"}
        desc={
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, cupiditate?"
        }
      />

      <div className="about">
        <div className="about-content">
          <div className="image">
            <img src={img1} alt="" />
          </div>
          <div className="text">
            <h3>Our Story </h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
              rerum sunt quod quidem earum quae vel sapiente et. Corporis
              assumenda a dolorum dignissimos voluptates provident quod nesciunt
              iure! Deserunt, quae?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
              rerum sunt quod quidem earum quae vel sapiente et. Corporis
              assumenda a dolorum dignissimos voluptates provident quod nesciunt
              iure! Deserunt, quae?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
              rerum sunt quod quidem earum quae vel sapiente et. Corporis
              assumenda a dolorum dignissimos voluptates provident quod nesciunt
              iure! Deserunt, quae?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
              rerum sunt quod quidem earum quae vel sapiente et. Corporis
              assumenda a dolorum dignissimos voluptates provident quod nesciunt
              iure! Deserunt, quae?
            </p>
            <h3>Our Goal</h3>
            <div className="list">
              <div className="list__item">
                <i class="uil uil-check-circle"></i>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis blanditiis laudantium distinctio alias quam! Accusamus obcaecati sit dolor ducimus dignissimos?</p>
              </div>
              <div className="list__item">
                <i class="uil uil-check-circle"></i>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis blanditiis laudantium distinctio alias quam! Accusamus obcaecati sit dolor ducimus dignissimos?</p>
              </div>
              <div className="list__item">
                <i class="uil uil-check-circle"></i>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis blanditiis laudantium distinctio alias quam! Accusamus obcaecati sit dolor ducimus dignissimos?</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <WhyUs />


      <Subscribe />
      <Footer />
    </div>
  );
};

export default About;
