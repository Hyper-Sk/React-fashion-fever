import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import Heading from "../../components/heading/Heading";
import LatestProducts from "../../components/latest-products/LatestProducts";
import Footer from "../../components/footer/Footer";
import BestProducts from "../../components/best-products/BestProducts";
import WhyChooseUs from "../../components/why-choose-us/WhyChooseUs";
import Subscribe from "../../components/subscribe/Subscribe";
import { useLocation } from "react-router-dom";

const Home = () => {

  useEffect(() => {
    document.title = "Fever Fashion Clothing"
  },[])

  

  return (
    <section className="home-page">
      <Header />

      <Hero />

      <Heading heading={"Latest Collection"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tenetur debitis alias culpa nihil placeat."} />

      <LatestProducts />

      <Heading heading={"Best Collection"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tenetur debitis alias culpa nihil placeat."} />


      <BestProducts />

      <WhyChooseUs />

      <Subscribe />

      <Footer />
      
    </section>
  );
};

export default Home;
