import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
import logo from './../../assets/logo.png'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-content">
        <div className="left" to="/">
          <Link className="left__logo">
            <img src={logo} alt="" />
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, modi nulla itaque sunt ratione veritatis voluptates non cum ipsum sit nobis incidunt sed dolorem rerum quod nihil ullam quis mollitia delectus dolor omnis provident perferendis veniam. Rerum perferendis autem aliquid!
          </p>
        </div>
        <div className="middle">
          <h3>Company</h3>
          <div className="menu">
            <Link to="/">Home</Link>
            <Link to="/">About us</Link>
            <Link to="/">Delivery</Link>
            <Link to="/">Privacy policy</Link>
          </div>
        </div>

        <div className="right">
          <h3>Get In Touch</h3>
          <Link to="/">+1-0000-0000-000</Link>
            <Link to="/">sohailshaiksk12345@gmail.com</Link>
            <Link to="/">Instagram</Link>
        </div>

      </div>
      
      <div className="copyright">
        <p>Copyright 2025@ sohailshaiksk@12345@gmail.com - All Right Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer