import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "../../components/Form";
import { browserStorage } from "../../../../helpers/Storage";
import ProfileCard from "../../components/ProfileCard";
import Button from "../../components/Button";
import connectThroughWindow from "../../../../../blockchain_client/ethereum/connectWallet";
import { SizesList } from "../../components/ListWidgets";
import AssetEntity from '../../../domains/entities/AssetEntity';

const form_field_schema = [
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
    name: "documentUrl",
    maxlength: 10,
  },
];

 const UserProfiles = () => {
  const { username } = useParams();
  const [userProfile, setUserProfile] = useState(
    browserStorage.getFromStorage(username.toString())
  );
  const navigate = useNavigate();
  const [assetsDetails, setAssetsDetails] = useState(AssetEntity.initialState().assetEntity);
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

  const handleClick = (event: any) => {
    console.log(assetsDetails);
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    userProfile.assetHolding.push(assetsDetails);
    browserStorage.storeInStorage(username.toString(), userProfile);
    setReviewStatus(true);
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
      <div
        className="asset-form"
        style={{ overflowY: "auto", maxHeight: "100vh" }}
      >
        <Button
          description={"connect wallet"}
          buttonSize="small"
          onclickEvent={connectThroughWindow}
        />
        <h2> Virtualize Asset</h2>
        <Form
          schema={form_field_schema}
          handleChange={handleChange}
          handleClick={handleClick}
          onSubmit={handleSubmit}
        />
        {reviewStatus ? <h2> Asset under review process</h2> : null}
        <ProfileCard
          card_details={{
            firstName: {
              variant: "h5",
              details: userProfile?.firstname,
              component: "div",
            },
            email: {
              variant: "h7",
              details: userProfile?.email,
              component: "div",
              style: { color: "text.secondary" },
            },
            phoneNumber: {
              variant: "p",
              details: userProfile?.phoneNumber,
              component: "div",
              style: { color: "text.secondary" },
            },
            governmentId: {
              variant: "h7",
              details: userProfile?.governmentId,
              component: "div",
              style: { color: "text.secondary" },
            },
          }}
          buttonText={"undefined"}
          onButtonClick={() => {}}
        />
        <SizesList
          size="ok"
          listTitle="asset under review"
          listObject={{
            walletAddress: "0x212f916DCfF88AC66883a2175de5BDa52C6bA968",
            status: "pending",
            price: "1000",
            stakeholder: "rajubhai da",
          }}
        />
      </div>
    </>
  );
};


export default UserProfiles