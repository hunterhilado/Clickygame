import React from "react";
import "./character.css";

const card = props => (
    <div className="card" onClick={() => props.clickedImage(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
      <div className="overlay">
        <div className="text">
          {props.name}
        </div>
      </div>
    </div>
  </div>
);

export default card;