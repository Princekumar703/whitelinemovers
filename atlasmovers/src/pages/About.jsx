import React from "react";
import "./about.css";
import workerImg from "../assets/worker.jpg"; 
import NumberAnimation from "./NumberAnimation";

export default function About() {
  return (
    <section className="about-wrapper">

     <div className="about-left">

  {/* 🔥 Main Hero Heading */}
  <h1 className="hero-heading">
    Fast & Reliable <span>Packers & Movers</span> in Jaipur
  </h1>

  {/* 🔥 Subheading */}
  <p className="hero-sub">
    Safe Shifting • Affordable Pricing • 24x7 Service
  </p>

  {/* 🔥 Trust Line */}
  <div className="trust-line">
    ⭐ 500+ Happy Customers | 🚚 1000+ Shifts Done
  </div>

  {/* 🔥 CTA Buttons
  <div className="hero-buttons">
    <button className="btn primary">📞 Call Now</button>
    <button className="btn secondary">💬 WhatsApp</button>
  // </div> */}

  {/* 🔥 Small CTA Card (NOT BIG) */}
  <div className="hero-popup">
    <NumberAnimation />
  </div>

</div>

      <div className="about-right">
        <div className="img-frame"></div>
        <img src={workerImg} alt="Worker" className="about-img" />
      </div>

    </section>
  );
}
