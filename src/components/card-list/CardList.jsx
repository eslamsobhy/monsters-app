import React from "react";

// styles
import "./card-list.styles.css";

const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monsters.map((monster) => {
        const { id, name, email } = monster;
        return <h1 key={id}>{name}</h1>;
      })}
    </div>
  );
};

export default CardList;
