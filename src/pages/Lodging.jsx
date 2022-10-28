import React from "react";
import Tags from "../components/Tags";
import Rating from "../components/Rating";
import Accordion from "../components/Accordion";
import Error404 from "./Error404";
import Carrousel from "../components/Carrousel";
import { useParams } from "react-router-dom";

const Lodging = ({ data }) => {
  const { id } = useParams();

  const item = data.find((item) => item.id === id);
  if (!item) {
    return <Error404 />;
  } else {
    const {
      description,
      equipments,
      host,
      location,
      pictures,
      rating,
      tags,
      title,
    } = item;

    return (
      <div className="lodgingpage">
        <Carrousel pictures={pictures} />
        <div className="lodging-main">
          <div className="lodging-maininfos">
            <h1>{title}</h1>
            <p>{location}</p>
            <div className="lodging-tagsection">
              {tags.map((tag, index) => (
                <Tags key={index} tags={tag} />
              ))}
            </div>
          </div>
          <div className="lodging-secondaryinfos">
            <div className="lodging-hostinfos">
              <p>{host.name}</p>
              <img
                src={host.picture}
                className="lodging-hostprofile"
                alt="host"
              />
            </div>
            <Rating rating={rating} />
          </div>
        </div>
        <div className="lodging-detailedinfos">
          <Accordion header="Description" description={description} />
          <Accordion header="Équipements" equipments={equipments} />
        </div>
      </div>
    );
  }
};

export default Lodging;