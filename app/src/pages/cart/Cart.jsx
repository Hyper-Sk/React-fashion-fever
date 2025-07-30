import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import img from "./../../../public/product_images/fullsleeve-tshirt-black-men-1.jpg";
import "./cart.css";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/context";

const Cart = () => {
  const { cartItems, allProducts, shippingFee } = useContext(AppContext);
  const [cartData, setCartData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item]) {
          tempData.push({
            id: parseInt(items),
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);



      let subTotal = 0
      tempData.map((item, index) => {
        let product = allProducts.find((product) => item.id === product.id)
        subTotal += (product.price * item.quantity)
      })
   
    setTotalPrice(subTotal)


  }, []);


  console.log()
  return (
    <div className="cart-page">
      <Header />
      <div className="cart-container">
        <div className="cart-content">
          {/* cart  */}
          <div className="cart">
            <h2>Your Cart</h2>

            {cartData.length > 0 ? cartData.map((item, index) => {
              const product = allProducts.find((product) => {
                if (product.id === item.id) {
                  return product;
                }
              });

              return (
                <div className="cart__item" key={index}>
                  <div className="left">
                    <div className="image">
                      <img src={product.images[0]} alt="" />
                    </div>
                    <div className="text">
                      <h3>{product.name}</h3>
                      <p>${product.price}</p>
                      <div className="size">{item.size}</div>
                    </div>
                  </div>
                  <div className="right">
                    <div className="input">
                      <input type="number" value={item.quantity} />
                    </div>

                    <div className="delete">
                      <i class="uil uil-trash-alt"></i>
                    </div>
                  </div>
                </div>
              );
            }) : <div className="">Cart is Empty</div>
          }
          </div>

          {/* cart total  */}
          <div className="cart-total">
            <h2>Cart Totals</h2>
            <div className="subtotal">
              <p>Sub Total</p>
              <h4>${totalPrice}</h4>
            </div>
            <div className="shipping">
              <p>Shipping Fee</p>
              <h4>${shippingFee}</h4>
            </div>
            <div className="total">
              <p>Total to Pay</p>
              <h4>${totalPrice + shippingFee}</h4>
            </div>
            <div className="checkout">
              <Link to="/place-order">Proceed to Checkout</Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
