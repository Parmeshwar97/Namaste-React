import logo from "../../assets/large.png";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  let [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex z-10 justify-between fixed top-0 mt-0 mb-10 w-full px-8 items-center h-26 lg:bg-orange-100 bg-slate-600 sm:bg-pink-100">
      <div className="logo-container">
        <NavLink to="/">
          <img className="w-1/5 rounded-full" src={logo} />{" "}
        </NavLink>
      </div>
      <div className="flex items-center">
        <ul className="flex gap-4 p-3 ">
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
