import React from "react";
import { useLocation } from "react-router-dom";

const SummaryPage = () => {
  const location = useLocation();
  const state = location.state;
  console.log(state);

  return (
    <div className="outer">
      <div className="inner">
        <h2>
          <b>Förhandsvisning av annons</b>
        </h2>
        <h3>Bild</h3>
        <p>Title och beskrivning</p>
        <p>WIP</p>
      </div>
    </div>
  );
};
export default SummaryPage;
