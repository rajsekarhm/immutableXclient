import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../adapters/actions/UserActions";
import { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

function useAccount() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();
  const calledRef = useRef(false);
  const userDetails = useSelector((state: any) => state?.user?.user) || {};
  const { user, assets = [], tokens = [] } = userDetails;

  const loading = useSelector((state: any) => state.user.loading);
  const error = useSelector((state: any) => state.user.error);
  if(error == 'NOT_FOUND'){ // workarount to fix this asap 

    /**
     * Warning: Cannot update a component (`RouterProvider`) while rendering a different component (`UserProfile`). To locate the bad setState() call inside `UserProfile`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render Error Component Stack
     */
    navigate("/sign-up/users");
  }
  
  useEffect(() => {

    if (!userId || userId === "undefined") {
      navigate("/sign-up/users");
      return;
    }

    if (!calledRef.current && (!user || user.userId !== userId)) {
      calledRef.current = true;
      dispatch(getUser(userId));
    }
  }, [userId, dispatch, user, navigate]);

  const { firstName, lastName, email, phoneNumber, assetIds, tokenIds } =
    user || {};

  return {
    firstName,
    lastName,
    email,
    phoneNumber,
    userId,
    assetIds,
    tokenIds,
    assets,
    tokens,
  };
}

export default useAccount;
