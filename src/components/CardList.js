import React from "react";
import Card from "./Card.js";

const CardList = ({ animals }) => {
  const robotCards = animals.map((user, i) => {
    return <Card key={i} id={animals[i].id} name={animals[i].name} email={animals[i].email} />;
  });
  return <div>{robotCards}</div>;
};

export default CardList;
