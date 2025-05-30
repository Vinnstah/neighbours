import React, { useState } from "react";
import ProgressDots from "../../components/ProgressDots";
import { useNavigate } from "react-router-dom";

const DescriptionPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/lana-ut/photo", { state: formData });
  };

  return (
    <div className="outer">
      <div className="inner">
        <h1>
          <b>Låna ut sak</b>
        </h1>
        <ProgressDots activePage={1} />
        <h3>Steg 2</h3>
        <p>Beskriv din grej</p>
        <p>
          Annonsen hämtar automatiskt information så som avstånd och ditt namn
          från din profil
        </p>
        <input
          type="text"
          className="titleInput"
          name="title"
          placeholder="Titel..."
          onChange={handleChange}
        ></input>
        <textarea
          type="text"
          name="description"
          className="descriptionInput"
          placeholder="Beskrivning..."
          onChange={handleChange}
        />
        <button onClick={handleNext} className="next-button">
          Next
        </button>
      </div>
    </div>
  );
};

export default DescriptionPage;
