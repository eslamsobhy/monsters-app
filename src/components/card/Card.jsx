import React from "react";

// styles
import "./card.styles.css";

const Card = (props) => {
  const { id, name, email } = props.monster;
  return (
    <div className="card-container">
      <h1 key={id}>{name}</h1>
    </div>
  );
};

export default Card;
