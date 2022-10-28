import React, { useState } from "react";
import filledstar from "../assets/images/filledstar.svg";
import emptystar from "../assets/images/emptystar.svg";

const Rating = ({ rating }) => {
  const initNotation = parseInt(rating);
  const [notation, setNotation] = useState(initNotation);
  const starNumber = [1, 2, 3, 4, 5];

  return (
    <div className="Rating">
      {starNumber.map((number) => (
        <img
          className="star"
          key={number}
          src={notation >= number ? filledstar : emptystar}
          alt="star notes"
          onClick={() =>
            notation !== number ? setNotation(number) : setNotation(number - 1)
          }
        />
      ))}
    </div>
  );
};

export default Rating;