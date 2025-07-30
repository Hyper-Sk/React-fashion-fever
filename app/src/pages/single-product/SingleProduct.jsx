import React, { use, useContext, useEffect, useLayoutEffect } from "react";
import "./single-product.css";
import Header from "./../../components/header/Header";
import Footer from "./../../components/footer/Footer";
import StarRating from "../../components/rating/StarRating";
import { AppContext } from "../../context/context";
import { useState } from "react";
import profile from "./../../assets/profile.png";
import { useLocation } from "react-router-dom";
import RelatedProducts from "../../components/related-products/RelatedProducts";
import Heading from "../../components/heading/Heading";

const SingleProduct = () => {
  const { info, setInfo, allProducts, currency, addToCart,cartItems,cartTotal } = useContext(AppContext);
  // product state
  const [currentProduct, setCurrentProduct] = useState({});
  const [sizes, setSizes] = useState([]);
  const [size, setSize] = useState("");
  const [reviews, setReviews] = useState([]);
  const [longDesc, setLongDesc] = useState([]);
  const [images, setImages] = useState([]);
  const [bigImg, setBigImg] = useState("");
  const [URL,setURL] = useState(new URLSearchParams(window.location.href).get("id"))


  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };


  const handleRefresh = () => {
    const url = new URLSearchParams(window.location.search);
    let id = url.get("id");
    id = parseInt(id);
    setURL(id)
    scrollToTop()
  }

  useEffect(() => {
    scrollToTop();
  }, []);
  

  useEffect(() => {
    const url = new URLSearchParams(window.location.search);
    let id = url.get("id");
    id = parseInt(id);
    let product = allProducts.filter((item, index) => {
      if (item.id === id) {
        return item;
      }
    });
    setCurrentProduct(product[0]);
    setSizes(product[0].sizes);
    setReviews(product[0].reviews);
    setLongDesc(product[0].long_desc);
    setImages(product[0].images);
    setBigImg(product[0].images[0]);
    setSize("");
    document.title = `Fever - ${product[0].name}`
  }, [URL]);

  // console.log(images)
  return (
    <div className="product-single-page">
      <Header />

      <div className="product-view">
        <div className="product-view-content">
          <div className="view__left">
          <div className="view-image">
              {bigImg && <img src={bigImg} alt="" />}
            </div>

            <div className="view-images">
              {images.map((item, index) => {
                return (
                  <img
                    src={item}
                    key={index}
                    alt=""
                    onClick={() => setBigImg(item)}
                  />
                );
              })}
            </div>
           
          </div>
          <div className="view__right">
            <h2 className="title">{currentProduct.name}</h2>

            <StarRating rating={3.5} total={reviews.length} />

            <p className="price">
              {currency}
              {currentProduct.price}
            </p>
            <p className="paragraph">{currentProduct.short_desc}</p>
            <h4 className="sizes-heading">Select Size</h4>
            <div className="sizes">
              {sizes.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={size === item ? "size active" : "size"}
                    onClick={() => setSize(item)}
                  >
                    {item}
                  </div>
                );
              })}
            </div>

            <button className="add-to-cart" onClick={()=>addToCart(currentProduct.id,size)}>
              Add To Cart
            </button>

            <div className="line"></div>

            <div className="info">
              <p>100% Original product.</p>
              <p>Cash on delivery is available on this product.</p>
              <p>Easy return and exchange policy within 7 days.</p>
            </div>
          </div>
        </div>

        <div className="product-info">
          <div className="tabs">
            <button
              className={info === "DESC" ? "desc active" : "desc"}
              onClick={() => setInfo("DESC")}
            >
              Description
            </button>
            <button
              className={info === "REVIEW" ? "review active" : "review"}
              onClick={() => setInfo("REVIEW")}
            >
              Reviews ({reviews.length})
            </button>
          </div>

          {info === "DESC" && (
            <div className="description">
              <div className="text">
                {longDesc.map((item, index) => {
                  return <p key={index}>{item}</p>;
                })}
              </div>
            </div>
          )}

          {info === "REVIEW" && (
            <div className="reviews">
              {reviews &&
                reviews.map((item, index) => {
                  return (
                    <div key={index} className="review__single">
                      <img src={profile} alt="" />
                      <h4>{item.username}</h4>
                      <StarRating rating={item.rating} />
                      <p>{item.desc}</p>
                    </div>
                  );
                })}
            </div>
          )}
        </div>
      </div>
      <Heading heading={"Related Products"} desc={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque explicabo omnis suscipit officia tempora eum fugiat ipsa aliquid in iusto."} />

      <RelatedProducts category={currentProduct.category} subCategory={currentProduct.sub_category} handleRefresh={handleRefresh} />

      <Footer />
    </div>
  );
};


export default SingleProduct;
