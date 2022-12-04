import React from "react";
import "./Login.css";
import Trade from "../assets/login.png";

const Login = () => {
  return (
    <div className="login">
      <div className="container">
        <div className="left">
          <img src={Trade} alt="trade app" />
        </div>
        <div className="right">
          <h2>Earn passive income with crypto investments.</h2>
          <p>Earn up to 15% annual rewards on 50+ digital assets.</p>
          <div className="input-container">
            <input type="email" placeholder="Enter your email" />
            <button type="submit" className="btn ">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
