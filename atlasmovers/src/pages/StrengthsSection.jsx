import React from "react";
import "./StrengthsSection.css";
import truck from "../assets/truck-icon.jpg"; // icon ka path apne hisab se change karo

const StrengthsSection = () => {
  const data = [
    { number: "13+", title: "Years Of Trust", sub: "Delivering Smiles Since 2007" },
    { number: "2000+", title: "Moves Annually", sub: "Happily Acrosss The World" },
    { number: "15+", title: "Hundred Sq.Feet", sub: "Warehousing Space" },

    { number: "100+", title: "Trained Manpower", sub: "Makes Your Move Safe & On Time" },
    { number: "30+", title: "Branches PAN India", sub: "To Cover 1264 Destinations Nationally" },
    { number: "100+", title: "Vehicles", sub: "For Every Segment And Needs" },
  ];

  return (
    <>
    <div className="strengths-section">
      <h2 className="strengths-title">Our Strengths, Which Makes Us</h2>
      <p className="strengths-subtitle">The Most Preferable Moving Brand</p>

      <div className="strengths-grid">
        {data.map((item, index) => (
          <div key={index} className="strength-item">
            <h3 className="strength-number">{item.number}</h3>
            <p className="strength-title">{item.title}</p>
            <p className="strength-sub">{item.sub}</p>
          </div>
        ))}
      </div>
    </div>
    <hr /></>
  );
};

export default StrengthsSection;
