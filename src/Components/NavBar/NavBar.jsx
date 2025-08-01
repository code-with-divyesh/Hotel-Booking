import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import "./NavBar.css";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-inner">
        <Link to="/">
          <img src={assets.logo} alt="logo" className="logo" />
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/rooms">Hotels</Link>
          <Link to="/">Experience</Link>
          <Link to="/">About</Link>
          <button className="dashboard-btn">Dashboard</button>
        </div>

        <div className="nav-right">
          <img src={assets.searchIcon} alt="search" className="icon" />
          <button className="login-btn">Login</button>
        </div>

        <div className="menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <img src={assets.menuIcon} alt="menu" />
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <button onClick={() => setIsMenuOpen(false)} className="close-btn">
          <img src={assets.closeIcon} alt="close" />
        </button>
        <Link to="/" onClick={() => setIsMenuOpen(false)}>
          Home
        </Link>
        <Link to="/rooms" onClick={() => setIsMenuOpen(false)}>
          Hotels
        </Link>
        <Link to="/" onClick={() => setIsMenuOpen(false)}>
          Experience
        </Link>
        <Link to="/" onClick={() => setIsMenuOpen(false)}>
          About
        </Link>
        <button className="dashboard-btn" onClick={() => setIsMenuOpen(false)}>
          Dashboard
        </button>
        <button className="login-btn">Login</button>
      </div>
    </nav>
  );
};

export default NavBar;
