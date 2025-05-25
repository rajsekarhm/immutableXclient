import mockCard from "../mockData";
import PrimarySearchAppBar from "../../components/AppBar";
import ShowCaseCard from "../../components/ShowCaseCard";
import useAccount from "../hooks/useAccount";
import { useParams } from "react-router-dom";
export default function MarketPlace() {
  const actions = {
    onSearch: () => {},
    onAccountClick: () => {},
    OnMoreClick: () => {},
  }; 
  const { userId = undefined} = useParams()
  if(userId){
    var {firstName, lastName,email,userId:_userId} = useAccount()
  }
  return (
    <>
      <PrimarySearchAppBar actionEvents={actions} authDetails={{isAuth: userId ? true :  false}} isUserDetailsNeed={userId ? true :  false} userDetails={{firstName, lastName, email, userId:_userId}}/>
      <div style={{background:'white', height:'650vh', msOverflowY:'hidden'}}>
        <ShowCaseCard cardDetails={mockCard} />
      </div>
    </>
  );
}

