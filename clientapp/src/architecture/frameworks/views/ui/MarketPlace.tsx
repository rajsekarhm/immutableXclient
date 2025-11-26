import mockCard from "../mockData";
import PrimarySearchAppBar from "../../components/AppBar";
import ShowCaseCard from "../../components/ShowCaseCard";
import useAccount from "../hooks/useAccount";
import { useNavigate, useParams } from "react-router-dom";
import "../css/MarketPlace.css";

export default function MarketPlace() {
  const navigate = useNavigate()
  const { userId = undefined } = useParams();
  if (userId) {
    var { firstName, lastName, email, userId: _userId } = useAccount();
  }
  return (
    <div className="marketplace-container">
      <PrimarySearchAppBar
        authDetails={{ isAuth: userId ? true : false }}
        isUserDetailsNeed={!!userId}
        userDetails={{ firstName, lastName, email, userId: _userId }}
      />
      {/* <div className="marketplace-content"> */}
        <ShowCaseCard cardDetails={mockCard} />
      {/* </div> */}
    </div>
  );
}