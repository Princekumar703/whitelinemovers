import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import varifiedImg from "../assets/varified.png";
import logo from "../assets/whitelinelogo1.png"

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">

      <div className="nav-container">

        {/* LEFT */}
        <div className="nav-left">
          <Link to="/" className="nav-logo">
           <img
            src={logo}
            alt="Whiteline movers"
            className="verified-badge whitine-logo"
          />
          </Link>

          <img
            src={varifiedImg}
            alt="verified"
            className="verified-badge"
          />
        </div>

        {/* DESKTOP MENU */}
       <div className="navmenu"> <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/feature">Features</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul></div>

        <a href="tel:9251202201" className="nav-call">
          📞 Call Now
        </a>

        {/* MOBILE HAMBURGER */}
        <div className="nav-toggle" onClick={() => setOpen(!open)}>
          <span className={open ? "line open" : "line"}></span>
          <span className={open ? "line open" : "line"}></span>
          <span className={open ? "line open" : "line"}></span>
        </div>

      </div>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${open ? "show" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
        <Link to="/feature" onClick={() => setOpen(false)}>Features</Link>
        <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
      </div>

    </nav>
  );
}