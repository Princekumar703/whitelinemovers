import React from "react";
import "./features.css";
import StrengthsSection from "./StrengthsSection";

export default function Features() {
  const features = [
    {
      icon: "⏰",
      title: "24*7 Service",
      desc: "Our services are available 24*7. You can book anytime & we are always available."
    },
    {
      icon: "🚛",
      title: "Easy Booking",
      desc: "Our booking services are available easily without any hesitation."
    },
    {
      icon: "👤",
      title: "Affordable Pricing",
      desc: "Our services are available at very cheap and affordable prices for any kind of shifting."
    },
    {
      icon: "🏠",
      title: "Domestic Moves",
      desc: "We provide our service for domestic moves with safety precautions."
    },
    {
      icon: "📞",
      title: "Easily Contact",
      desc: "Shree packers and movers are easily available. You can contact us anytime."
    },
    {
      icon: "📍",
      title: "Understand your emotions",
      desc: "We always understand your emotions attached to your goods. Relax, we will handle the rest."
    }
  ];

  return (<>
    <section className="features-section">
      <div className="features-header">
        <div className="truck-icon">🚚</div>
        <h2>Our Features</h2>
        <p>Atlas Packers And Movers Provide Many Features...</p>
      </div>

      <div className="features-grid">
        {features.map((f, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{f.icon}</div>
            <div className="feature-content">
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
      
    </section>
    <hr />
    
    </>
  );
}

