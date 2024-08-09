import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "./components/Card";
export default function MarketPlace() {
  return (
    <>
      <Card
        image="image"
        title="title"
        description="description"
        buttonText="button text"
        stakeholder="title"
        price={23}
        onButtonClick={() => {}}
      />
    </>
  );
}
