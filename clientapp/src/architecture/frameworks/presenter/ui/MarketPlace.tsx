import mockCard from "../mockData";
import PrimarySearchAppBar from "../../components/AppBar";
import ShowCaseCard from "../../components/ShowCaseCard";
export default function MarketPlace() {
  const actions = {
    onSearch: () => {},
    onAccountClick: () => {},
    OnMoreClick: () => {},
  }; 
  return (
    <>
      <PrimarySearchAppBar actionEvents={actions} authDetails={{isAuth:true}} />
      <div style={{background:'white', height:'650vh', msOverflowY:'hidden'}}>
        <ShowCaseCard cardDetails={mockCard} />
      </div>
    </>
  );
}

