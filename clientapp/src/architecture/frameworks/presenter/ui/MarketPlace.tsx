import mockCard from "../mockData";
import PrimarySearchAppBar from "../../components/AppBar";
import ShowCaseCard from "../../components/ShowCaseCard";
import useAccount from "../hooks/useAccount";
export default function MarketPlace() {
  const actions = {
    onSearch: () => {},
    onAccountClick: () => {},
    OnMoreClick: () => {},
  }; 
  return (
    <>
      <PrimarySearchAppBar actionEvents={actions} authDetails={{isAuth:true}} isUserDetailsNeed={true} />
      <div style={{background:'white', height:'650vh', msOverflowY:'hidden'}}>
        <ShowCaseCard cardDetails={mockCard} />
      </div>
    </>
  );
}

