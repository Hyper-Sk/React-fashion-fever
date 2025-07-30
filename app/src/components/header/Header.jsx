import React, { useContext, useEffect, useState } from "react";
import { Link, Links, NavLink, useLocation } from "react-router-dom";
import "./header.css";
import logo from "./../../assets/logo.png";
import { AppContext } from "./../../context/context";

const Header = () => {
  const { showAside, setShowAside, cartTotal } = useContext(AppContext);
  const { pathname } = useLocation()
  
  useEffect(() => {
    setShowAside(false)
  },[pathname])

  return (
    <header className="header">
      <div className="header-content">
        <Link to={"/"} className="header__logo">
          <img src={logo} alt="" />
        </Link>
        <div className="header__menu">
          <Link to="/" className={pathname === "/" ?"menu-item active": "menu-item"}>
            Home
          </Link>
          <Link to="/products" className={pathname === "/products" ?"menu-item active": "menu-item"}>
            Collection
          </Link>
          <Link to="/about" className={pathname === "/about" ?"menu-item active": "menu-item"}>
            About
          </Link>
          <Link to="/contact" className={pathname === "/contact" ?"menu-item active": "menu-item"}>
            Contact
          </Link>
        </div>

        <div className="header__icons">
          <div className="icon">
            <i className="uil uil-search-alt"></i>
          </div>
          <div className="icon">
            <i className="uil uil-user"></i>
          </div>
          <Link to={"/cart"} className="icon">
            {
              cartTotal > 0&& <div className="circle">{cartTotal}</div>
            }
            <i className="uil uil-shopping-bag"></i>
            
          </Link>
        </div>
      </div>

      <div className="header-mobile">
        <Link to={'/'} className="mobile__logo">
          <img src={logo} alt="" />
        </Link>

        <div className="mobile__icons">
          <div className="icon">
            <i className="uil uil-search-alt"></i>
          </div>
          <div className="icon">
            <i className="uil uil-user"></i>
          </div>
          <Link to={'/cart'} className="icon cart">
            {
              cartTotal > 0&& <div className="circle">{cartTotal }</div>
            }
            <i className="uil uil-shopping-bag"></i>
          </Link>
          <div className="open" onClick={() => setShowAside(true)}>
            <i className="uil uil-bars"></i>
          </div>
        </div>

        <aside className={showAside ? "mobile__aside show" : "mobile__aside"}>
          <div className="menu">
            <Link to="/" className={pathname === "/" ?"active": ""}> Home</Link>
            <Link to="/products" className={pathname === "/products" ?"active": ""}> Collection</Link>
            <Link to="/about" className={pathname === "/about" ?"active": ""}> About</Link>
            <Link to="/contact" className={pathname === "/contact" ?"active": ""}> Contact</Link>
          </div>

          <div className="close" onClick={() => setShowAside(false)}>
            <i className="uil uil-multiply"></i>
          </div>
        </aside>
      </div>
    </header>
  );
};

export default Header;
