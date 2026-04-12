import React from "react";
import "./callnow.css";

export default function CallNow() {
  const phoneNumber = "9251202201";  // apna number daal lo
  const whatsappLink = `https://wa.me/+91${phoneNumber}`;

  return (
    <div className="call-now-wrapper">
      <a href={`tel:+91${phoneNumber}`} className="call-now-btn call">
        📞 Call Now
      </a>
      <a href={whatsappLink} className="call-now-btn whatsapp" target="_blank" rel="noopener noreferrer">
        💬 WhatsApp
      </a>
    </div>
  );
}
