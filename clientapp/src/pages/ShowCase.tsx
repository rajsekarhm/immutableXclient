import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import mockCard from "../mockData";
import CardComponent from "../components/Card";
export default function MarketPlace() {
  return (
    <>
      <h1> displaying mock data </h1>
      <div
        className="market-place"
        style={{ overflowY: "auto", maxHeight: "100vh" }}
      >
        {mockCard.map((cardData) => {
          return (
            <CardComponent
              image={cardData.image}
              title={cardData.title}
              description={cardData.description}
              buttonText={cardData.buttonText}
              stakeholder={cardData.stakeholder}
              price={cardData.price}
              onButtonClick={cardData.onButtonClick}
              onClickInDetails={cardData.onButtonClick}
              detailsButtonText={cardData.detailsButtonText}
            />
          );
        })}
      </div>
    </>
  );
}
