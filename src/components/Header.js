import logo from "../../assets/large.png";
import React, { useState } from "react";
const Header = () => {
  let [btnName, setBtnName] = useState("login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            onClick={() => {
              setBtnName(
                btnName === "Login" ? (btnName = "Logout") : btnName = "Login"
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
