import React, { useEffect, useState } from "react";
import "./loader.css";

export default function Loader() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
    }, 1200); // loader hide after 1.2 seconds OR replace with your logic

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`apmo-loader-full ${hide ? "hide" : "null"}`}>
      <div className="apmo-spinner"></div>
      <p className="apmo-text">Loading...</p>
    </div>
  );
}
