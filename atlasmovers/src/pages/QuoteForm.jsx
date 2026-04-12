import React, { useState } from "react";
import axios from "axios";
import "./quote.css";
import truckIcon from "../assets/truck-icon.jpg";

export default function QuoteForm() {
  const [popup, setPopup] = useState(false);

  const [popupMsg, setPopupMsg] = useState("");
const [popupType, setPopupType] = useState(""); // success | error

  const [error, setError] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const phone = form.get("phone");

    // PHONE VALIDATION
    const phoneRegex = /^[6-9][0-9]{9}$/;
   if (!phoneRegex.test(phone)) {
  setPopupMsg("Enter valid 10-digit mobile number starting with 6,7,8,9");
  setPopupType("error");
  setPopup(true);
  setTimeout(() => setPopup(false), 3000);
  return;
}

    setError("");

    const data = {
      name: form.get("name"),
      email: form.get("email"),
      phone,
      movingType: form.get("type"),
      movingFrom: form.get("from"),
      movingTo: form.get("to"),
    };

    setIsDisabled(true); // disable after click

    try {
      const response = await axios.post(
        "http://localhost:5000/send-quote",
        data
      );

      if (response.status === 200 || response.status === 201) {

        setPopupMsg("Quote Sent Successfully 🎉");
setPopupType("success");
setPopup(true);
setTimeout(() => setPopup(false), 3000);

        e.target.reset();
      }
      

    } catch (err) {
    const message =
    err.response?.data?.message || "Something went wrong!";

  setPopupMsg(message);
  setPopupType("error");
  setPopup(true);
  setTimeout(() => setPopup(false), 3000);
      
    } finally {
      setIsDisabled(false); // enabled only after response comes
    }
  };

  return (
    <section className="quote-section">
      <div className="quote-head">
        <img src={truckIcon} alt="truck" className="quote-icon" loading="lazy" />
        <h2>Get A Free Quote</h2>
        <div className="quote-underline"></div>
      </div>

      {/* FORM */}
      <form className="quote-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email Address" required />
        
        <input type="tel" name="phone" placeholder="Your Phone" required maxLength="10" />
        {error && <p className="error-text">{error}</p>}

        <input type="text" name="type" placeholder="Moving Type (Home, Office...)" required />
        <input type="text" name="from" placeholder="Moving From (City)" required />
        <input type="text" name="to" placeholder="Moving To (City)" required />

        <button className="submit-btn" disabled={isDisabled}>
          {isDisabled ? "Please wait..." : "SUBMIT"}
        </button>
      </form>

     {popup && (
  <div className={`popup ${popupType}`}>
    {popupMsg}
  </div>
)}

    </section>
  );
}
