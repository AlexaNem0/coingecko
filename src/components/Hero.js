import React from "react";
import "./Hero.css";
import Crypto from "../assets/hero-img.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="left">
          <p> Buy & Sell Crypto 24/7 using your savings account</p>
          <h1>Invest in Cryptocurrency with your TFSA</h1>
          <p>Buy, Sell, and store hundreds of Coins in one place</p>
          <div className="input-container">
            <input type="text" placeholder="Enter your email" />
            <button className="btn">Learn More</button>
          </div>
        </div>
        <div className="right">
          <div className="img-container">
            <img src={Crypto} alt="Crypto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
