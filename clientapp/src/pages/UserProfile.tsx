import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export const UserProfiles = () => {
  const userProfile = useSelector((state) => state.userActions);
  const navigate = useNavigate();
  const userId = useParams();
  useEffect(() => {
    if (false) {
      return;
    }
    navigate("/signin");
  }, []);
  return (
    <>
      <label>
        <span>{userProfile.name}</span>
        <br />
      </label>
      <label>
        <span>{userProfile.email}</span>
        <br />
      </label>
      <label>
        <span>{userProfile.contactNumber}</span>
        <br />
      </label>
      <label>
        <span>{userProfile.edition}</span>
        <br />
      </label>
      <label>
        <span>{userProfile.location}</span>
        <br />
      </label>
    </>
  );
};
