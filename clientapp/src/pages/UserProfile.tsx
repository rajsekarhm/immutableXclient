import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "../components/Form";
import { AssetDetailsContract } from "../global-store/types/state_types/AssestDetailsType";
import { browserStorage } from "../browser_utils/Storage";
import ProfileCard from "../components/ProfileCard";
import ButtonComponent from "../components/Button";
import connectThroughWindow from "../../blockchain_client/ethereum/connectWallet";


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
  const {username} = useParams();
  const [userProfile,setUserProfile] = useState(JSON.parse(browserStorage.getFromStorage(username.toString())));
  console.log(userProfile)
  const navigate = useNavigate();
  const [assetsDetails, setAssetsDetails] = useState(AssetDetailsContract);
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
     <ButtonComponent description={"connect wallet"} buttonSize="small" onclickEvent={connectThroughWindow}/>
      <div className="asset-form">
        <h2> Virtualize Asset</h2>
        <Form
          fields={fieldConfigurations}
          handleChange={handleChange}
          handleClick={handleClick}
          onSubmit={handleSubmit}
        />
      </div>
      {reviewStatus ? <h2> Asset under review process</h2> : null}
      <ProfileCard card_details ={{
      firstName: {
        variant: "h5",
        details: userProfile.firstname,
        component: "div",
      },
      email: {
        variant: "h7",
        details: userProfile.email,
        component: "div",
        style: { color: "text.secondary" },
      },
      phoneNumber: {
        variant: "p",
        details:userProfile.phoneNumber,
        component: "div",
        style: { color: "text.secondary" },
      },
      governmentId: {
        variant: "h7",
        details: userProfile.governmentId,
        component: "div",
        style: { color: "text.secondary" },
      }

  }}
  buttonText={"undefined"}
  onButtonClick={()=>{}}
  />
    </>
  );
};
