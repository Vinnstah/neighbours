import React from "react";

export default function ProgressDots({ activePage }) {
  return (
    <div className="dot-container">
      {[0, 1, 2].map((index) => (
        <span
          key={index}
          className={`dot ${activePage === index ? "active" : ""}`}
        />
      ))}
    </div>
  );
}
