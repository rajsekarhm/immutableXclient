import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../controllers/actions/UserActions";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function useAccount() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();
  const userDetails = useSelector((state: any) => state.user.user);
  const { user, assets = [], tokens = []} = userDetails
  useEffect(() => {
    if (!userId) {
      navigate("/sign-in/users");
    }

    if (!user || user.userId !== userId) {
      dispatch(getUser(userId));
    }
  }, [userId, dispatch]);
  const { firstName, lastName, email, phoneNumber, assetIds, tokenIds } = user || {};
  return {
    firstName,
    lastName,
    email,
    phoneNumber,
    userId,
    assetIds,
    tokenIds,
    assets ,
    tokens
  };
}

export default useAccount;
