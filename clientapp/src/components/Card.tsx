import React from "react";
import { cardType } from "../global-store/types/stateType/CardType";
const Card = ({
  image,
  title,
  description,
  buttonText,
  onButtonClick,
  stakeholder,
  price,
  onClickInDetials,
  detailsButtonText,
}: cardType) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <h3>{stakeholder} </h3>
        <h3>{price} USD </h3>
        <button className="card-button" onClick={onClickInDetials}>
          {detailsButtonText}
        </button>
        <button className="card-button" onClick={onButtonClick}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
