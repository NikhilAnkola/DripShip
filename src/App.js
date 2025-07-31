// App.js
import React, { useState } from 'react';
import './App.css';
import './Login.css';
import logo from './logo.jpeg';
import Login from './Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setShowLoginForm(false);
  };

  const handleLoginClick = () => {
    setShowLoginForm(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowLoginForm(false);
  };

  return (
    <div className="App">
      <Navbar
        onLoginClick={handleLoginClick}
        onLogoutClick={handleLogout}
        isLoggedIn={isLoggedIn}
      />

      {isLoggedIn ? (
        <>
          <Home />
          <Shop />
          <About />
          <Contact />
        </>
      ) : showLoginForm ? (
        <Login
          username="Nikhil"
          password="3103"
          onLoginSuccess={handleLoginSuccess}
        />
      ) : (
        <div className="landing-message">
          <h2>Welcome to DripShip!</h2>
          <p>Click Login to continue.</p>
        </div>
      )}
    </div>
  );
}

function Navbar({ onLoginClick, onLogoutClick, isLoggedIn }) {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="DripShip Logo" className="navbar-logo" />
        <span className="navbar-title">DripShip</span>
      </div>
      <div className="navbar-right">
        <ul className="navbar-links">
          <li onClick={() => scrollToSection('home')}>Home</li>
          <li onClick={() => scrollToSection('shop')}>Shop</li>
          <li onClick={() => scrollToSection('about')}>About</li>
          <li onClick={() => scrollToSection('contact')}>Contact</li>
          {isLoggedIn ? (
            <li onClick={onLogoutClick}>Logout</li>
          ) : (
            <li onClick={onLoginClick}>Login</li>
          )}
        </ul>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <section id="home" className="section">
      <h2>Home Section</h2>
      <p>Welcome to DripShip's homepage!</p>
      <ul>
        <li>High-quality dropshipping products</li>
        <li>Fast and reliable shipping</li>
        <li>24/7 customer support</li>
        <li>Trusted by thousands of users</li>
      </ul>
    </section>
  );
}

function Shop() {
  return (
    <section id="shop" className="section">
      <h2>Shop Section</h2>
      <p>Explore our exclusive dropshipping products.</p>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <h2>About Us</h2>
      <p>Learn more about DripShip's mission and team.</p>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact Us</h2>
      <p>Feel free to reach out through our email or social media.</p>
    </section>
  );
}

export default App;
