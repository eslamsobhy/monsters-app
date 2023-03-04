import React from "react";

import Card from "../card/Card";

// styles
import "./card-list.styles.css";

const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monsters.map((monster, index) => {
        return <Card key={index} monster={monster} />;
      })}
    </div>
  );
};

export default CardList;
