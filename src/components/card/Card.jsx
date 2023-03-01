import React from "react";

// styles
import "./card.styles.css";

const Card = (props) => {
  const { id, name, email } = props.monster;
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt={`monster #${id}`}
      />
      <h2 key={id}>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
