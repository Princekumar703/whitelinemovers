import React from "react";
import "./Locations.css";
import Footer from "./Footer";

const Locations = () => {
  const column1 = [
    "Jaipur ","All Rajasthan" , "Bangalore", "Bhopal", "Bhubaneshwar",
    "Chandigarh", "Chennai", "Cochin", "Coimbatore", "Delhi"
  ];

  const column2 = [
    "Ghaziabad", "Goa", "Gurgaon", "Hyderabad", "Indore",
    "Jabalpur", "Jaipur", "Kolkata", "Lucknow" , "Ahmedabad"
  ];

  const column3 = [
    "Mumbai", "Nagpur", "Navi Mumbai", "Patna",
    "Pune", "Ranchi", "Trichy", "Trivandrum", "Vijayawada","Baroda"
  ];

  return (<>
    <div className="locations-page">
      <h2 className="location-heading">Our Service Locations in India</h2>

      <div className="locations-container">
        <ul>{column1.map((city, i) => <li key={i}>{city}</li>)}</ul>
        <ul>{column2.map((city, i) => <li key={i}>{city}</li>)}</ul>
        <ul>{column3.map((city, i) => <li key={i}>{city}</li>)}</ul>
      </div>
        <Footer/>
         {/* Bottom Bar */}
      
    </div>
   
   
    </>
  );
};

export default Locations;
