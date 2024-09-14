import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import mockCard from "../mockData";
import CardComponent from "../components/Card";
export default function MarketPlace() {
  return (
    <>
      <h1> Displaying mock data </h1>
      <div
        className="market-place"
        style={{ overflowY: "auto", maxHeight: "100vh" }}
      >
        {mockCard.map((cardData) => {
          return (
            <CardComponent
              image={cardData.image}
              card_details={cardData.card_details}
              buttonText={cardData.buttonText}
              onButtonClick={cardData.onButtonClick}
              detailsButtonText={cardData.detailsButtonText}
              onClickInDetails={cardData.onClickInDetails}
            />
          );
        })}
      </div>
    </>
  );
}
