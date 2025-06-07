import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../adapters/actions/UserActions";
import { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

function useAccount() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();
  const calledRef = useRef(false);

  const userDetails = useSelector((state: any) => state.user.user);
  const { user, assets = [], tokens = [] } = userDetails;

  useEffect(() => {
    if (!userId || userId === 'undefined') {
      navigate("/sign-in/users");
      return;
    }

    if (!calledRef.current && (!user || user.userId !== userId)) {
      calledRef.current = true;
      dispatch(getUser(userId));
    }
  }, [userId, dispatch, user, navigate]);

  const { firstName, lastName, email, phoneNumber, assetIds, tokenIds } = user || {};

  return {
    firstName,
    lastName,
    email,
    phoneNumber,
    userId,
    assetIds,
    tokenIds,
    assets,
    tokens
  };
}

export default useAccount;
