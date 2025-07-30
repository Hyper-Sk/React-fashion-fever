import React,{useEffect} from "react";
import './contact.css'
import Header from "./../../components/header/Header";
import Footer from "./../../components/footer/Footer";
import Subscribe from "./../../components/subscribe/Subscribe";
import Heading from "./../../components/heading/Heading";
import { Link } from "react-router-dom";


import img1 from './../../assets/contact-1.jpg'


const Contact = () => {

  useEffect(() => {
    document.title = "Fever - Contact"
  },[])
  return (
    <div className="contact-page">
      <Header />
      <Heading
        heading={"Contact us"}
        desc={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, sit!"
        }
      />

      <div className="contact">
        <div className="contact-content">
          <div className="image">
            <img src={img1} alt="" />
          </div>
          <div className="text">
            <div className="col">
            <h3>Our Store</h3>
            <p>89438, Nivada Suite 773, Nivada, USA</p>
            <Link>Tel: (000) 000-0000</Link>
            <Link>Email: sohailshaiksk12345@gmail.com</Link>
            </div>
            <div className="col">
            <h3>Career at Forever</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio,
              esse officia! Ut!
            </p>
            <button>Explore Jobs</button>
            </div>
          </div>
        </div>
      </div>

      <Subscribe />
      <Footer />
    </div>
  );
};

export default Contact;
