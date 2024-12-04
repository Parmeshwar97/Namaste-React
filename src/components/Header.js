import logo from "../../assets/large.png";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  let [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status : {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/shopping">Shopping</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/contact">Contact Us</NavLink>
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
