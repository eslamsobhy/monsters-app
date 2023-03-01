import React from "react";

const Card = (props) => {
  const { id, name, email } = props.monster;
  return <h1 key={id}>{name}</h1>;
};

export default Card;
