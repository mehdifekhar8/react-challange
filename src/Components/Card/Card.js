import React from "react";

import "./Card.css";

const Card = ({ children, title }) => {
  return (
    <div className={"card-container"}>
      <div className={"card-header"}>
        <div className={"card-title"}>{title}</div>
      </div>
      <div className={"card-body"}>{children}</div>
    </div>
  );
};

export default Card;
