import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [clickHamburger, setClickHamburger] = useState(false);

  const handleClick = () => setClickHamburger(!clickHamburger);
  return (
    <div className="header">
      <div className="container">
        <h1>
          BI<span className="primary">Coin</span>
        </h1>
        <ul className={clickHamburger ? "nav-menu active" : "nav-menu"}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Featured</a>
          </li>
          <li>
            <a href="/">Earn</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
        <div className="btn-group">
          <button className="btn">Your Wallet</button>
        </div>
        <div className="hamburger" onClick={handleClick}>
          {clickHamburger ? (
            <FaTimes size={20} style={{ color: "#333" }} />
          ) : (
            <FaBars size={20} style={{ color: "#333" }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
