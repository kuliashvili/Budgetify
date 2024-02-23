import "./Login.css";
import eyeIcon from "../../assets/eye.png";
import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import close from "../../assets/close.svg"

function Login() {
  let error = document.getElementById("error-field");
  const [counter, setCounter] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3002/api/users");
      const users = await response.json();
      const user = users.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        setLoggedIn(true);
        // window.location.href = "/main";
      } else {
        error.style.display = "flex"
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      alert("An error occurred while logging in");
      
    }
  };

  const validateEmail = () => {
    setEmailError( email == "")
  }

  const validatePassword = () => {
    setPasswordError( password == "")
  }

  function showPassword() {
    setCounter(counter + 1);
    let inputPassword = document.getElementById("input-password");

    if (counter % 2 === 0) {
      inputPassword.setAttribute("type", "text");
    } else {
      inputPassword.setAttribute("type", "password");
    }
  }

  function hideError(){
    error.style.display = "none"
  }

  return (
    <div className="Login">
      {loggedIn ? (
        <Navigate to="/main" />
      ) : (
        <div className="login-container">
          <div className="login-inner">
            <div className="login-up">
              <h1 className="login-header">Budgetify</h1>
            </div>
            <div className="login-down">
              <div id="error-field" className="error-field" >
                <p className="error-field-text" >Incorrect email or password</p>
                <button onClick={hideError} className="error-close" >
                  <img className="error-close-img"  src={close} ></img>
                </button>
              </div>
              <div className="login-form">
                <input
                  placeholder="Email"
                  name="email"
                  label="Email"
                  required
                  onBlur={validateEmail}
                  onChange={(e) => setEmail(e.target.value)}
                  className={emailError ? "error" : ""}
                ></input>
                {emailError && <div className="error-message" >Email is required</div>}
                <div className="password-input-container">
                  <input
                    id="input-password"
                    placeholder="Password"
                    name="password"
                    label="Password"
                    type="password"
                    required
                    onBlur={validatePassword}
                    onChange={(e) => setPassword(e.target.value)}
                    className={passwordError ? "error" : ""}
                  ></input>
                  <button onClick={showPassword} className="eye-button">
                    <img className="eye-icon" src={eyeIcon} alt="eyeIcon"></img>
                  </button>
                </div>
                {passwordError && <div className="error-message" >Password is required</div>}


                

                <button
                  className="login-button"
                  title="Submit"
                  type="submit"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
