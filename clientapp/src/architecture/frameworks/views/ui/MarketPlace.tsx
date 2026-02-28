import mockCard from "../mockData";
import PrimarySearchAppBar from "../../components/AppBar";
import ShowCaseCard from "../../components/ShowCaseCard";
import { useSelector } from "react-redux";
import { RootState } from "../../../adapters/store";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import "../css/MarketPlace.css";
import useUserController from "../hooks/useAccount";
import { useEffect } from "react";


export default function MarketPlace() {
  const controller = useUserController();
  const navigate = useNavigate();
  const { userid } = useParams();
  const { isAuthenticated } = useAuth();
  const user = useSelector((state: RootState) => state.user.user);
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/signin/users");
      return;
    }else{
      controller.execute('getUser', userid);
    }
  },[isAuthenticated,userid])
  
  const { firstName, lastName, email, userId } = user ?? {};

  return (
    <div className="marketplace-container">
      <PrimarySearchAppBar
        authDetails={{ isAuth: isAuthenticated }}
        isUserDetailsNeed={isAuthenticated}
        userDetails={{ firstName, lastName, email, userId }}
      />
      <ShowCaseCard cardDetails={mockCard} />
    </div>
  );
}