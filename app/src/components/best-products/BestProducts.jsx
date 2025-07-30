import React, { useContext, useEffect, useState } from "react";
import "./best-products.css";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/context";

const BestProducts = () => {
  const { allProducts } = useContext(AppContext);

  const [bestProducts, setBestProducts] = useState([]);

  useEffect(() => {
    setBestProducts(allProducts);
  }, []);
  return (
    <section className="collection">
      <div className="collection-content">
        {bestProducts.map((item, index) => {
          if (item.collection === "best") {
            return (
              <Link key={index} to={`/single-product?id=${item.id}`} className="collection__single">
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

export default BestProducts;
