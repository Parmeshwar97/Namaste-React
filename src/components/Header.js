import logo from "../../assets/large.png";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  let [btnName, setBtnName] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/about">Contact Us</NavLink>
          </li>
          <li>Cart</li>
          <button
            onClick={() => {
              setBtnName(
                btnName === "Login" ? (btnName = "Logout") : (btnName = "Login")
              );
            }}
          >
            {btnName}
          </button>
          {}
        </ul>
      </div>
    </div>
  );
};

export default Header;
