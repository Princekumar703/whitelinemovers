import React from "react";
import "./ourprocess.css";  // CSS file import

export default function OurProcess() {
  const steps = [
    {
      num: 1,
      icon: "📝",
      title: "Book Services",
      desc: "If you are shifting your household or office property then you must book our service."
    },
    {
      num: 2,
      icon: "📦",
      title: "Pack Your Things",
      desc: "After Booking we pack your all things without any cracks through our professional team members."
    },
    {
      num: 3,
      icon: "🚛",
      title: "Move Your Things",
      desc: "After packing we move your all things to your desired location with 100% safety & without any damage."
    },
    {
      num: 4,
      icon: "📍",
      title: "Delivery on time",
      desc: "As per your particular date we can shift your all household & office property within the time period."
    }
  ];

  return (
    <section className="process-section">
      <div className="process-container">
        
        {/* Header */}
        <div className="process-header">
          <div className="process-truck">🚚</div>
          <h2>Our Process</h2>
          <p>
            Our Process Starts With Your Booking To Deliver Your Properties At A
            Particular Date.
          </p>
        </div>
        <hr />

        {/* Numbers
        <div className="process-circle-row">
          {steps.map((s, index) => (
            <div className="process-circle" key={index}>
              {s.num}
            </div>
          ))}
        </div> */}

        {/* Steps Content */}
        <div className="process-grid">
          {steps.map((s, index) => (
            <div className="process-content" key={index}>
              <div className="process-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
