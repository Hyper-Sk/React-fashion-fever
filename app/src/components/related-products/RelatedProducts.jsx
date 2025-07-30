import React, { use, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./related-products.css";
import { AppContext } from "../../context/context";

const RelatedProducts = ({ category, subCategory, handleRefresh }) => {
  const { allProducts, currency } = useContext(AppContext);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    let productsCopy = allProducts.slice();
    productsCopy = productsCopy.filter(
      (item, index) => item.category === category
    );
    productsCopy = productsCopy.filter(
      (item, index) => item.sub_category === subCategory
    );
    if (productsCopy.length > 0) {
      setRelatedProducts(productsCopy.slice(0, 5));
    }
  }, [category, subCategory]);

  return (
    <section className="collection">
      <div className="collection-content">
        {relatedProducts.map((item, index) => {
          return (
            <Link
              key={index}
              to={`/single-product?id=${item.id}`}
              className="collection__single"
              onClick={handleRefresh}
            >
              <div className="image">
                <img src={item.images[0]} alt="" />
              </div>
              <h4>{item.name}</h4>
              <h3>
                {currency}
                {item.price}
              </h3>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default RelatedProducts;
