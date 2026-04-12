import React from "react";
import "./Contact.css"; // custom CSS file import
import whatsappIcon from "./whatsapp (2).png";
import QuoteForm from "./QuoteForm";


export default function Contact() {
  return (
    <div className="contact-page">

      {/* Heading */}
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We are here to assist you with your shifting needs. Get in touch anytime.</p>
      </div>

      {/* Content Wrapper */}
      <div className="contact-container">

        {/* Contact Box */}
        <div className="contact-box">
          <h2>Contact Details</h2>
          <h3>Head Office</h3>

          <p><strong>Address:</strong> Jaipur, Rajasthan, India</p>
          <p><strong>Phone:</strong>(+91) 9 251 202 201</p>
          <p><strong>Email:</strong> hello@atlasmovers.com</p>
          <p><strong>WhatsApp :</strong> <a href="https://wa.me/919251202201"><img src={whatsappIcon} alt="WhatsApp" loading="lazy" className="whatsapp-icon" /></a></p>
          <p>(click on whatsapp icon to message directly)</p>
        </div>

       {/* Map Box */}
<div className="map-box">
  <iframe
    title="map"
    width="100%"
    height="250"
    frameBorder="0"
    src="https://maps.google.com/maps?q=62A+Durga+Vihar,+Nangal+Jaisa+Bohra,+Jhotwara,+Jaipur,+Rajasthan&t=&z=15&ie=UTF8&iwloc=&output=embed"
  ></iframe>
</div>

      </div>
<QuoteForm/>
    </div>
  );
}
