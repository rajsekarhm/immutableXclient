import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../controllers/actions/UserActions"
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function useAccount() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();
  const userDetails = useSelector((state: any) => state.user.user);
  useEffect(() => {
    if (!userId) {
      navigate("/sign-in/users");
    } else {
      dispatch(getUser(userId));
    }
  }, [userId, dispatch, navigate]);
  console.log(userDetails)
  const { firstName, lastName, email, phoneNumber,assetIds } = userDetails || {};
  return { firstName, lastName, email, phoneNumber, userId,assetIds };
}

export default useAccount;
