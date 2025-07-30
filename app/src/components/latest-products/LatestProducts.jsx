import React, { useContext, useEffect, useState } from "react";
import "./latest-products.css";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/context";

const LatestProducts = () => {
  const { allProducts } = useContext(AppContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(allProducts);
  }, []);

  return (
    <section className="collection">
      <div className="collection-content">
        {latestProducts.map((item, index) => {
          if (item.collection === "latest") {
            return (
              <Link key={index} className="collection__single" to={`/single-product?id=${item.id}`} >
                <div className="image">
                  <img src={item.images[0]} alt="" />
                </div>
                <h4>Men Round Neck Pure Cotton</h4>
                <h3>$80</h3>
              </Link>
            );
          }
        })}
      </div>
    </section>
  );
};

export default LatestProducts;
