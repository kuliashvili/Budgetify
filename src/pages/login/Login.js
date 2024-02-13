import "./Login.css";
import eyeIcon from "../../assets/eye.png";
import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Redirect } from "react-router-dom";

function Login() {
  const [counter, setCounter] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = await response.json();
      const user = users.find(
        (user) => user.email === email && user.address.zipcode === password
      );

      if (user) {
        setLoggedIn(true);
        alert("good job" + user.name +  loggedIn);
        window.location.href = "/main"
       
      } else {
        alert("login or password is wrong, please try again");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      alert("An error occurred while logging in");
    }
  };

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
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <div className="password-input-container">
                <input
                  id="input-password"
                  placeholder="Password"
                  name="password"
                  label="Password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                ></input>
                <button onClick={showPassword} className="eye-button">
                  <img className="eye-icon" src={eyeIcon} alt="eyeIcon"></img>
                </button>
              </div>

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
    </div>
  );
}

export default Login;
