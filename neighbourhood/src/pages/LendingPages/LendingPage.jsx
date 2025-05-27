import React, { useState } from "react";
import CategoryDropdown from "../../components/CategoryDropdown";
import ProgressDots from "../../components/ProgressDots";
import { useNavigate } from "react-router-dom";

const LendingPage = () => {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/lana-ut/category");
  };

  return (
    <div className="outer">
      <div className="inner">
        <h1>
          <b>Låna ut sak</b>
        </h1>
        <ProgressDots activePage={0} />
        <h3>Steg 1</h3>
        <p>Välj kategori</p>
        <p>
          Annonsen hämtar automatiskt information så som avstånd och ditt namn
          från din profil
        </p>
        <CategoryDropdown />
        <button onClick={nextPage} className="next-button">
          Nästa
        </button>
      </div>
    </div>
  );
};

export default LendingPage;
