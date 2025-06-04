import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { HiChevronDown } from "react-icons/hi2";

const ProfilePage = () => {
  return (
    <div>
      <div className="wrapper">
        <p>
          Här hittar du all information om vilka saker du har lånat, det du
          själv erbjuder och ifall du har några sparade favorit grannar!{" "}
        </p>
        <hr />
        <div>
          <h3>LÅNADE SAKER</h3>
          <p>Hammare</p>
          <p>Cykel</p>
          <p>Leksak</p>
          <u>Mer info</u>
        </div>
        <hr />
        <div>
          <h3>MINA SAKER</h3>
          <u>Se alla saker </u>
          <BsArrowRight />
        </div>
        <hr />
        <div className="summary">
          <h3>FAVORITGRANNAR ❤️</h3>
        </div>
        <hr />
        <div className="faq">
          <h3>FAQ</h3>
          <h4>
            Jag kan inte ladda upp några saker <HiChevronDown />
          </h4>
          <h4>
            Hur anmäler jag någon?
            <HiChevronDown />
          </h4>
          <h4>
            Jag hittar inte min annons, var är den?
            <HiChevronDown />
          </h4>
          <h4>
            Hur tar jag bort min annons?
            <HiChevronDown />
          </h4>
          <h4>
            Hur fungerar försäkringen?
            <HiChevronDown />
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
