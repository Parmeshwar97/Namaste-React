import logo from "../../assets/large.png";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  let [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between">
      <div className="logo-container">
        <img className="w-56" src={logo} />
      </div>
      <di>
        <ul className="flex">
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
      </di>
    </div>
  );
};

export default Header;
