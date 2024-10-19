import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import mockCard from "../mockData";
import CardComponent from "../../components/Card";
import PrimarySearchAppBar from "../../components/AppBar";
export default function MarketPlace() {
  const actions = {
    onSearch: () => {},
    onProfileClick: () => {},
    onAccountClick: () => {},
    OnMoreClick: () => {},
  };
  return (
    <>
      <PrimarySearchAppBar actionEvents={actions} />
      <h1> Displaying mock data </h1>
      <div
        className="market-place"
        style={{ overflowY: "auto", maxHeight: "100vh" }}
      >
        {mockCard.map((cardData) => {
          return (
            <div key={cardData.card_details.asset_unique_id.details}>
              <CardComponent
                image={cardData.image}
                card_details={cardData.card_details}
                buttonText={cardData.buttonText}
                onButtonClick={cardData.onButtonClick}
                detailsButtonText={cardData.detailsButtonText}
                onClickInDetails={cardData.onClickInDetails}
                isInputNeed={true}
                onChangeAction={() => {
                  console.log("amount needed");
                }}
                fieldDetails={{
                  defaultValue: undefined,
                  description: "Enter price want bid",
                  className: "card_input_class",
                  type: "number",
                  name: "price",
                  pattern: "",
                  maxlength: 10,
                }}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
