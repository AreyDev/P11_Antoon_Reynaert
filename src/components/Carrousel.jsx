import React, { useState } from "react";
import arrowleft from "../assets/images/arrowleft.svg";
import arrowright from "../assets/images/arrowright.svg";

const Carrousel = ({ pictures }) => {
  const [showImages, setShowImages] = useState(pictures[0]);
  let i = pictures.indexOf(showImages);

  return (
    <div className="carrousel">
      <img src={showImages} className="showimages" alt="nom" />
      <img
        src={arrowleft}
        className={pictures.length > 1 ? "arrowleft" : "hide"}
        onClick={() =>
          showImages === pictures[0]
            ? setShowImages(pictures[pictures.length - 1])
            : setShowImages(pictures[i - 1])
        }
        alt="arrowleft"
      />
      <img
        src={arrowright}
        className={pictures.length > 1 ? "arrowright" : "hide"}
        onClick={() =>
          showImages === pictures[pictures.length - 1]
            ? setShowImages(pictures[0])
            : setShowImages(pictures[i + 1])
        }
        alt="arrowright"
      />
      <p className={pictures.length > 1 ? "carrouselnumber" : ""}>
        {i + 1}/{pictures.length}
      </p>
    </div>
  );
};

export default Carrousel;