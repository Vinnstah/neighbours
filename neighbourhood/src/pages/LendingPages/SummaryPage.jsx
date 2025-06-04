import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { IoHammerOutline } from "react-icons/io5";
import { RiMapPinLine } from "react-icons/ri";
import { useLocation } from "react-router-dom";

const SummaryPage = () => {
  const location = useLocation();
  const state = location.state;
  console.log(state);

  return (
    <div className="wrapper">
      <div className="inner">
        <h2>
          <b>Förhandsvisning av annons</b>
        </h2>
        <img
          src="https://t3.ftcdn.net/jpg/00/61/89/08/360_F_61890818_YmErDhLWLbK46kSTnvCVawwQhwLnBFBa.jpg"
          className="chosen-image"
        />
        <div className="summary">
          <div>
            <IoHammerOutline />
            {"Verktyg "}
          </div>
          <p>
            <RiMapPinLine />
            150m bort
          </p>
        </div>
        <hr />
        <h3>Hammare</h3>
        <p>
          Lånar ut min gamla Bettan, en otrolig hammare av högsta kvalite som
          alltid löser alla projekt!
        </p>
        <button className="next-button">Låna ut</button>
      </div>
      <div>
        <h3>
          <b>Förhandsvisning av annons</b>
        </h3>
        <h3>Lånas ut av:</h3>
        <HiOutlineUserCircle className="ProfilePic" />
        <div className="NameAndLoc">
          <p>Sofia Roos</p>
          <p>
            <RiMapPinLine />
            Avstånd
          </p>
          <p>150m</p>
          <span>
            Sofia Roos har lånat ut
            <b> 345 </b>
            gånger
          </span>
          <hr />
        </div>
        <button className="next-button">Lägg upp annons</button>
      </div>
    </div>
  );
};
export default SummaryPage;
