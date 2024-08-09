import React from "react";
type cardType = {
  image: string;
  title: string;
  description: string;
  stakeholder: string;
  buttonText: string;
  onButtonClick: () => void;
  price: number;
};

type assestStatusType = {
  isAvailableForSell: boolean;
  price: number;
  stakeholder: string;
  walletAddress: string;
};

const Card = ({
  image,
  title,
  description,
  buttonText,
  onButtonClick,
  stakeholder,
  price,
}: cardType) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <h3>{stakeholder} </h3>
        <h3>{price}</h3>
        <button className="card-button" onClick={onButtonClick}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
