import React from "react";
import "./loading.css"; // Import the CSS file

export function Loading() {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p className="loading-text">Loading questions...</p>
    </div>
  );
}