import React, { useState } from "react";
import "./App.css";
import Login from "./Login";
import "./Login.css";
import logo from "./logo.png"; // Replace this with your actual image path

function App() {
  const [isLoginPage, setIsLoginPage] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setIsLoginPage(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsLoginPage(false);
  };

  return (
    <div className="App">
      {/* Inline Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" />
          <span>DripShip</span>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#shop">Shop</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          {!isLoggedIn ? (
            <li><button onClick={() => setIsLoginPage(true)} className="nav-button">Login</button></li>
          ) : (
            <li><button onClick={handleLogout} className="nav-button">Logout</button></li>
          )}
        </ul>
      </nav>

      {/* Main Area */}
      {isLoginPage && !isLoggedIn ? (
        <Login
          username="admin"
          password="password123"
          onLoginSuccess={handleLoginSuccess}
        />
      ) : (
        <div className="home" id="home">
          <h1>Welcome to DripShip!</h1>
          {!isLoggedIn ? (
            <p>Click Login to continue.</p>
          ) : (
            <ul>
              <li>🔹 Explore products</li>
              <li>🔹 Add items to your cart</li>
              <li>🔹 Secure checkout available</li>
            </ul>
          )}
        </div>
      )}

      <section id="shop">
        <h2>Shop</h2>
        <p>Our best-selling products will appear here.</p>
      </section>

      <section id="about">
        <h2>About</h2>
        <p>DripShip is a modern dropshipping platform for all your needs.</p>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Email us at support@dripship.com</p>
      </section>
    </div>
  );
}

export default App;
