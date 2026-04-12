// NoPageFound.jsx
// Simple 404 Not Found page with clean UI and Tailwind CSS styling

import React from "react";
import { Link } from "react-router-dom";
import "./NoPageFound.css";

export default function NoPageFound() {
  return (
    <div className="nopage-container">
      <h1 className="nopage-code">404</h1>
      <h2 className="nopage-title">
        Page Not Found
      </h2>
      <p className="nopage-text">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>

      <Link
        to="/"
        className="nopage-btn"
      >
        Go Back Home
      </Link>
    </div>
  );
}
