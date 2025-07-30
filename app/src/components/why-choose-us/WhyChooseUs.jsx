import React from "react";
import "./why-choose-us.css";

import img1 from './../../assets/transfer.png'
import img2 from './../../assets/product-return.png'
import img3 from './../../assets/online-support.png'


const WhyChooseUs = () => {
    return <section className="why-choose-us">
        <div className="why-choose-us-content">
            <div className="col">
                <img src={img1} alt="" />
                <h3>Easy Exchange Policy:</h3>
                <p>We offer hassle free exchange policy.</p>
            </div>
            <div className="col">
            <img src={img2} alt="" />
                <h3>7 Days Return Policy:</h3>
                <p>We provide 7 days free return policy.</p>
            </div>
            <div className="col">
            <img src={img3} alt="" />
                <h3>Best customer support:</h3>
                <p>we provide 24/7 customer support.</p>
            </div>
      </div>
  </section>;
};

export default WhyChooseUs;
