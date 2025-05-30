import React, { useState } from "react";
import CategoryDropdown from "../../components/CategoryDropdown";
import ProgressDots from "../../components/ProgressDots";
import { useNavigate, useLocation } from "react-router-dom";

const PhotoPage = () => {
  const [showImage, setShowImage] = useState(false);
  const location = useLocation();
  const state = location.state;
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/lana-ut/summary", { state: state });
  };

  const toggleImage = () => {
    if (showImage) {
      setShowImage(false);
    } else {
      setShowImage(true);
    }
  };

  return (
    <div className="outer">
      <div className="inner">
        <h1>
          <b>Låna ut sak</b>
        </h1>
        <ProgressDots activePage={2} />
        <h3>Steg 3</h3>
        <p>Välj bild</p>
        {showImage ? (
          <div className="inner">
            <img
              src="https://t3.ftcdn.net/jpg/00/61/89/08/360_F_61890818_YmErDhLWLbK46kSTnvCVawwQhwLnBFBa.jpg"
              className="chosen-image"
            />
            <p>Vald bild</p>
            <button onClick={toggleImage} className="image-button">
              Byt bild
            </button>
          </div>
        ) : (
          <button onClick={toggleImage} className="image-button">
            Valj bild
          </button>
        )}

        <button onClick={nextPage} className="next-button">
          Lana ut sak
        </button>
      </div>
    </div>
  );
};

export default PhotoPage;
