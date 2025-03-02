import React from "react";
import { Link } from "react-router-dom";
import PizzaLogo from "../Components/Assets/logo.png";
import '../Components/Styles/Navbar.css'
export const Navbar = () => {
  return (
    <div className="navbar" id="order-pizza">
      <div className="main">
        <img src={PizzaLogo} alt="" />
        <div className="mainLink">
          <Link to="/">Ana Sayfa</Link>
          <Link to="/pizza">Sipariş Ver</Link>
        </div>
      </div>
    </div>
  );
};
