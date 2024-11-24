import mockCard from "../mockData";
import PrimarySearchAppBar from "../../components/AppBar";
import ShowCaseCard from "../../components/ShowCaseCard";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../controllers/slice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useAccount from "../hooks/useAccount";
export default function MarketPlace() {
  const {firstName, lastName,email,userId} = useAccount()
  const actions = {
    onSearch: () => {},
    onAccountClick: () => {},
    OnMoreClick: () => {},
  }; 
  return (
    <>
      <PrimarySearchAppBar actionEvents={actions} authDetails={{isAuth:true}} userDetails={{name:firstName+lastName,email:email,userId:userId}} />
      <div style={{background:'white', height:'650vh', msOverflowY:'hidden'}}>
        <ShowCaseCard cardDetails={mockCard} />
      </div>
    </>
  );
}

