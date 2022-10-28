import React, { useState } from "react";
import arrowdown from "../assets/images/arrowdown.svg";
import arrowup from "../assets/images/arrowup.svg";

const Accordion = ({ header, description, text, equipments }) => {
  const [opened, setOpened] = useState(false);

  let contenu = "";
  if (header === "Description") {
    contenu = description;
  } else if (header === "Équipements") {
    contenu = equipments;
  } else {
    contenu = text;
  }

  return (
    <div className={contenu === text ? "about-accordion" : "accordion"}>
      <div
        className="title"
        onClick={() => (opened ? setOpened(false) : setOpened(true))}
      >
        <p>{header}</p>
        <img
          src={opened ? arrowdown : arrowup}
          className="arrows"
          alt="arrow"
        />
      </div>
      <div className={opened ? "droplist" : "droplist-closed"}>
        {description || text
          ? contenu
          : contenu.map((item, index) => <span key={index}>{item}</span>)}
      </div>
    </div>
  );
};

export default Accordion;