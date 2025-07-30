import React from "react";
import { Route, BrowserRouter, Routes,HashRouter } from "react-router-dom";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import SingleProduct from "./pages/single-product/SingleProduct";
import Products from "./pages/products/Products";
import Cart from "./pages/cart/Cart";
import PlaceOrder from "./pages/place-order/PlaceOrder";
import { AppProvider } from "./context/context";

// toast notification 
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/single-product" element={<SingleProduct />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/place-order" element={<PlaceOrder />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
