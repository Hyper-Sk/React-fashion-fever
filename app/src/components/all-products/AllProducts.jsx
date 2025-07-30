import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./all-products.css";

import { AppContext } from "../../context/context";

const AllProducts = () => {
  const { allProducts, currency } = useContext(AppContext);
  const [filterProducts, setFilterProducts] = useState([]);
  const [showDropdown, setShowDropdown] = useState(true);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relavent");

  window.addEventListener("load", (e) => {
    if (window.innerWidth > 576) {
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  });

  

  window.addEventListener("resize", (e) => {
    if (window.innerWidth > 576) {
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  });

  const toggleCategory = (e) => {
    let value = e.target.value;
    if (category.includes(value)) {
      setCategory((prev) => prev.filter((item) => item !== value));
    } else {
      setCategory([...category, value]);
    }
  };

  const toggleSubCategory = (e) => {
    let value = e.target.value;
    if (subCategory.includes(value)) {
      setSubCategory((prev) => prev.filter((item) => item !== value));
    } else {
      setSubCategory([...subCategory, value]);
    }
  };

  const applyFilter = () => {
    let myProducts = allProducts.slice();
    if (category.length > 0) {
      myProducts = myProducts.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      myProducts = myProducts.filter((item) =>
        subCategory.includes(item.sub_category)
      );
    }
    setFilterProducts(myProducts);
  };

  const sortProducts = () => {
    let filterProductsCopy = filterProducts.slice();
    if (sortType === "low-high") {
      setFilterProducts(filterProductsCopy.sort((a, b) => a.price - b.price));
    } else if (sortType === "high-low") {
      setFilterProducts(filterProductsCopy.sort((a, b) => b.price - a.price));
    } else {
      applyFilter();
    }
  };

  useEffect(() => {
    setFilterProducts(allProducts);
  }, []);

  useEffect(() => {
    applyFilter();
  }, [category, subCategory]);

  useEffect(() => {
    sortProducts();
  }, [sortType]);


  // console.log(category)
  // console.log(subCategory)

  return (
    <section className="all-products">
      <div className="all-products-content">
        <div className="all-products__left">
          <h3>
            Filter
            {showDropdown ? (
              <i
                className="uis uis-angle-up"
                onClick={() => setShowDropdown(false)}
              ></i>
            ) : (
              <i
                className="uis uis-angle-down"
                onClick={() => setShowDropdown(true)}
              ></i>
            )}
          </h3>

          {showDropdown && (
            <div className="category">
              <h4>Category</h4>
              <div>
                <input type="checkbox" value={"men"} onClick={toggleCategory} />
                <p>Men</p>
              </div>
              <div>
                <input
                  type="checkbox"
                  value={"women"}
                  onClick={toggleCategory}
                />
                <p>Women</p>
              </div>
              <div>
                <input
                  type="checkbox"
                  value={"kids"}
                  onClick={toggleCategory}
                />
                <p>Kids</p>
              </div>
            </div>
          )}

          {showDropdown && (
            <div className="type">
              <h4>Type</h4>
              <div>
                <input
                  type="checkbox"
                  value={"topwear"}
                  onClick={toggleSubCategory}
                />
                <p>Topwear</p>
              </div>
              <div>
                <input
                  type="checkbox"
                  value={"bottomwear"}
                  onClick={toggleSubCategory}
                />
                <p>Bottomwear</p>
              </div>
              <div>
                <input
                  type="checkbox"
                  value={"winterwear"}
                  onClick={toggleSubCategory}
                />
                <p>Winterwear</p>
              </div>
            </div>
          )}
        </div>

        <div className="all-products__right">
          <div className="all-products__right-top">
            <h3>All Collection </h3>
            <select name="" id="" onChange={(e) => setSortType(e.target.value)}>
              <option value="relavent">Sort by: Relavent</option>
              <option value="low-high">Sort by: Low to Hight</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
          </div>

          <div className="all-products__right-bottom">
            {filterProducts.map((item, index) => {
              return (
                <Link
                  key={index}
                  to={`/single-product?id=${item.id}`}
                  className="product__single"
                >
                  <div className="image">
                    <img src={item.images[0]} alt="" />
                  </div>
                  <h4>{item.name}</h4>
                  <h3>
                    {currency}{item.price}
                  </h3>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
