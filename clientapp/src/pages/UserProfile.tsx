import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Form from "../components/Form";
import { AssetDetailsContract } from "../global-store/types/stateType/AssestDetailsType";

const fieldConfigurations = [
  {
    defaultValue: undefined,
    description: "enter wallet address",
    className: "wallet_class",
    type: "text",
    name: "walletAddress",
    maxlength: 100,
  },
  {
    defaultValue: undefined,
    description: "enter price",
    className: "price_class",
    type: "string",
    name: "price",
    maxlength: 10,
  },
  {
    defaultValue: undefined,
    description: "enter stakeholder",
    className: "stakeholder_class",
    type: "text",
    name: "stakeholder",
    maxlength: 10,
  },
  {
    defaultValue: undefined,
    description: "",
    className: "document_class",
    type: "file",
    name: "document",
    maxlength: 10,
  },
];

export const UserProfiles = () => {
  const userProfile = useSelector((state) => state.userActions);
  const navigate = useNavigate();
  const [assetsDetails, setAssetsDetails] = useState(AssetDetailsContract);
  const userId = useParams();
  const [reviewStatus, setReviewStatus] = useState(false);
  const handleChange = (event: any) => {
    const { name, value, type, files } = event.target;
    if (type === "file" && files) {
      const fileToLoad = files[0];
      const form = new FormData();
      form.append(fileToLoad.name, fileToLoad);
    }
    setAssetsDetails({ ...assetsDetails, [name]: value });
  };

  const handleClick = (event: any) => {};
  const handleSubmit = (event: any) => {
    event.preventDefault();
    setReviewStatus(true);
    /**
     * handle asset details and mark as pending
     */
  };
  useEffect(() => {
    // api call make to validate that user is authenticated
    if (true) {
      return;
    }
    navigate("/signin");
  }, []);
  return (
    <>
      <div className="asset-form">
        <Form
          fields={fieldConfigurations}
          handleChange={handleChange}
          handleClick={handleClick}
          onSubmit={handleSubmit}
        />
      </div>
      {reviewStatus ? <h2> asset under review process</h2> : null}
      <div className="profile">
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
      </div>
    </>
  );
};
