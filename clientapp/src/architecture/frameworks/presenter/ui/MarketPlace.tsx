import mockCard from "../mockData";
import ShowCaseCard from "../../components/ShowCaseCard";
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
      <PrimarySearchAppBar actionEvents={actions}authDetails={{isAuth:false}} />
      <div style={{background:'white', height:'650vh', msOverflowY:'hidden'}}>
      {mockCard.map((cardData) => {
          return (
              <ShowCaseCard
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
              
          );
        })}
      </div>
    </>
  );
}
