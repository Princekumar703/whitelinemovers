import React from "react";
import "./home.css"; // make sure this file exists next to Home.jsx
import Features from "./Features";
import OurProcess from "./OurProcess";
import Services from "./Services";

import About from "./About";
import { Link } from "react-router-dom";
import QuoteForm from "./QuoteForm";



export default function Home() {
  return (
    <div className="home-page">
      {/* <Header/> */}

     <About/>


<hr />
<QuoteForm/>
<hr />

      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <h1>We Move More Than Boxes.<br /><span>We Move Lives.</span></h1>
          <p className="lead">Professional packing, safe transport and on-time delivery across cities. Trusted teams, insured moves.</p>

          <div className="hero-ctas">
            <a href="/contact" className="btn btn-cta-lg">Get Free Quote</a>
            <a href="/services" className="btn btn-ghost"> Services</a>

          </div>

          <ul className="hero-features">
            <li>• Trained & Verified Teams</li>
            <li>• GPS-tracked Trucks</li>
            <li>• Fragile-item Specialists</li>
            <li>• Transit Insurance Available</li>
            <li>• Transparent Pricing</li>
          </ul>
        </div>

        <div className="hero-right">
          <div className="truck-card">
            <div className="truck-illustration">🚚</div>
            <div className="truck-info">
              <h4>Reliable & Fast</h4>
              <p>Door-to-door shifting with live tracking.</p>
              <div className="small-cta">
                <a href="tel:+919251202201" className="btn btn-small">Request Call</a>
                <a href="https://wa.me/919251202201" target="_blank" rel="noreferrer" className="btn btn-wsp">WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr />

{/* <div className="Truck-road"><div className="truck-animate">
  🚚
  
</div></div> */}
<Services/>
<hr />
<div className="themeAll" >
      {/* WHY CHOOSE US */}
      <section id="about" className="section split">
        <div className="split-left">
          <h2>Why customers choose us</h2>
          <ul className="why-list">
            <li>✔ Trained packing teams</li>
            <li>✔ Transparent pricing — no hidden charges</li>
            <li>✔  Storage available</li>
            <li>✔ 24/7 support & easy claims</li>
             <li>✔ Transit Insurance Available</li>
          </ul>
        </div>
        <div className="split-right">
          <div className="stats">
            <div className="stat">
              <div className="num">2k+</div>
              <div className="label">Moves completed</div>
            </div>
            <div className="stat">
              <div className="num">4.8</div>
              <div className="label">Average rating</div>
            </div>
            <div className="stat">
              <div className="num">24/7</div>
              <div className="label">Support</div>
            </div>
             <div className="stat">
              <div className="num">100+</div>
              <div className="label">Vahicle</div>
            </div>
            <div className="stat">
              <div className="num">10+</div>
              <div className="label">Years of Trust</div>
            </div>
            <div className="stat">
              <div className="num">1.9k+</div>
              <div className="label">Happy Customer</div>
            </div>

          </div>
        </div>
      </section>
      {/* PRICING */}
      <section id="pricing" className="section">
        <div className="section-head">
          <h2>Simple Pricing</h2>
          <p className="muted">Transparent prices — pay only for what you use.</p>
        </div>

        <div className="pricing-cards">
          <div className="price-card">
            <div className="price">Local Move</div>
            <div className="title">1BHK/2BHK/3BHK</div>
            <ul>
              <li>for every Distance (even neighbour block )</li>
              <li>helpers as required </li>
              <li>RS (7000 /10000/14000)</li>
            </ul>
            <a href="tel:+919251202201" className="btn btn-ghost">Book Now</a>
          </div>

          <div className="price-card featured">
            <div className="price">Custom</div>
            <div className="title">Intercity Move as well OuterState</div>
            <ul>
              <li>Distance based quotes</li>
              <li>care your feelings</li>
              <li>price: RS10000 - RS70000</li>
            </ul>
            <a href="/contact" className="btn btn-cta">Get Quote</a>
          </div>

          <div className="price-card">
            <div className="price">Contact</div>
            <div className="title">Storage</div>
            <ul>
              <li>Secure storage</li>
              <li>Short & long term</li>
              <li>upto RS200</li>
            </ul>
            <a href="https://wa.me/919251202201" className="btn btn-ghost">Enquire(WhatsApp)</a>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="contact-cta">
        <div>
          <h2>Ready to move?</h2>
          <p>Get a free, no-obligation quote in minutes.</p>
        </div>
        <div>
          <a href="tel:+919251202201" className="btn btn-cta" style={{color:"#ffb700"}}>Call Now</a>
          <a href="https://wa.me/919251202201?text=Hi%20I%20want%20a%20quote
" className="btn btn-wsp">WhatsApp</a>
        </div>
      </section>
      </div>

      <Features/>
      <OurProcess/>

      {/* FOOTER */}
      
      {/* <footer className="footer">
        <div>© {new Date().getFullYear()} AtlasMovers</div>
        <div className="muted">Designed with ♥ by tech_explores</div>
      </footer> */}
    </div>
    

  );
}
