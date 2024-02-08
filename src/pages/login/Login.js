import "./Login.css";
import eyeIcon from "../../assets/eye.png";
import React, { useState } from "react";
import {Link, Navigate} from "react-router-dom"

function Login() {
  let [counter, setCounter] = useState(0);

  function showPassword() {
    setCounter(counter + 1);
    let inputPassword = document.getElementById("input-password");

    if (counter % 2 === 0) {
      inputPassword.setAttribute("type", "text");
    } else {
      inputPassword.setAttribute("type", "password");
    }
  }

 

  return (
    
    <div className="Login">
      <div className="login-container">
        <div className="login-inner">
          <div className="login-up">
            <h1 className="login-header">Budgetify</h1>
          </div>
          <div className="login-down">
            <div className="login-form">
              <input
                placeholder="Email"
                name="email"
                label="Email"
                required
              ></input>
              <div className="password-input-container">
                <input
                  id="input-password"
                  placeholder="Password"
                  name="password"
                  label="Password"
                  type="password"
                  required
                ></input>
                <button onClick={showPassword} className="eye-button">
                  <img className="eye-icon" src={eyeIcon} alt="eyeIcon"></img>
                </button>
              </div>

              <button className="login-button" title="Submit" type="submit" onClick={() => window.location.href = '/main'} >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
