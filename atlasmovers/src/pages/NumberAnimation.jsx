import React, { useEffect, useState } from "react";
import "./numberanimation.css";

export default function MobileNumberPopBlock({
  number = "9251202201",
  revealSpeed = 90,
}) {
  const [visibleChars, setVisibleChars] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleChars((prev) => {
        if (prev >= number.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, revealSpeed);

    return () => clearInterval(interval);
  }, [number]);

  return (
    <div className="call-container">

      {/* NUMBER BOX */}
      <a href="tel:+919251202201" className="call-box">

        <p className="call-text">📞 Call Now</p>

        <div className="call-number">
          {number.split("").map((ch, i) => (
            <span
              key={i}
              className={`digit ${i < visibleChars ? "show" : ""}`}
            >
              {i < visibleChars ? ch : ""}
            </span>
          ))}

          <span className="cursor">|</span>
        </div>

      </a>

      <p className="call-tagline">
        For All Shifting & Logistics Solutions
      </p>

    </div>
  );
}