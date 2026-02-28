import mockCard from "../mockData";
import PrimarySearchAppBar from "../../components/AppBar";
import ShowCaseCard from "../../components/ShowCaseCard";
import { useSelector } from "react-redux";
import { RootState } from "../../../adapters/store";
import { useNavigate, useParams } from "react-router-dom";
import useSession from "../hooks/useSession";
import "../css/MarketPlace.css";
import { useEffect } from "react";


export default function MarketPlace() {
  const navigate = useNavigate();
  const { userid } = useParams();
  const { session, isAuthenticated } = useSession();
  const user = useSelector((state: RootState) => state.user.user);

  // Resolve userId: prefer URL param, fall back to JWT claim
  const resolvedUserId = userid || session?.sub;

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/signin/users");
    }
    // useSession auto-hydrates user data from JWT when Redux store is empty
  }, [isAuthenticated, navigate]);

  const { firstName, lastName, email, userId } = user ?? {};

  return (
    <div className="marketplace-container">
      <PrimarySearchAppBar
        authDetails={{ isAuth: isAuthenticated }}
        isUserDetailsNeed={isAuthenticated}
        userDetails={{ firstName, lastName, email, userId: resolvedUserId }}
      />
      <ShowCaseCard cardDetails={mockCard} />
    </div>
  );
}