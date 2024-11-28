import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProfileCard from "../../components/ProfileCard";
import ShowCaseCard from "../../components/ShowCaseCard";
import { Label } from "../../components/shadcn/Label";
import Button from "../../components/Button";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "../../components/shadcn/HoverCard";
import { InputBox } from "../../components/InputBox";
import useAccount from "../hooks/useAccount";
import { useDispatch, useSelector } from "react-redux";
import { useWallet } from "../hooks/useWallet";
import { AppDispatch } from "architecture/controllers/store";
import { getAsset } from "../../../controllers/actions/AssetActions";

function UserProfiles() {
  const { account } = useWallet();
  const dispatch = useDispatch<AppDispatch>();
  const { firstName, lastName, phoneNumber, email,assetIds } = useAccount();
  const navigate = useNavigate();
  const assets =  useSelector((state: any) => state.asset.asset);
  const {userId} = useParams()
  const [transferOwner, settransferOwner] = useState({
    to: null,
    tokenId: null,
  });
  function onAssetChange(event: any) {
    const { name, value } = event;
    settransferOwner({ ...transferOwner, [name]: value });
  }
  function onClickAssetChange(event: any) {
    event.preventDefault();
    console.log(transferOwner);
  }
  const fetchedFromUser =  assets?.length ? assets.map((asset:any) => {
    return {
      card_details: {
        id: "one",
        title: "Token IMX",
        content: asset,
      },
      buttonText: "View Explorer",
      onClick: () => {},
      isInputNeed: true,
    }
  }) : [
    {
      card_details: {
        id: "one",
        title: "Token IMX",
        content: {
          description :"No Asset Holding"
        },
      },
      buttonText: "View MarketPlace",
      onClick: () => { navigate(`/marketplace/${userId}`)},
      isInputNeed: true,
    },
  ]; 

  useEffect(() => {
    dispatch(getAsset({ asserAddress: account, assetIds }));
    // api call make to validate that user is authenticated
    if (false) {
      navigate("/sign-in/users");
    }
  }, [assetIds]);

  return (
    <div
      style={{
        background: "white",
        height: "150vh",
        msOverflowY: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div style={{ width: "300px", position: "absolute", top: 0, right: 0 }}>
        <ProfileCard
          name={firstName + lastName}
          mail={email}
          address={"india"}
          phone={phoneNumber}
        />
      </div>
      <div className="grid gap-4 py-4">
        <Button
          onclickEvent={() => navigate(`/tokenization/${userId}`)}
          description={"Tokenization"}
        />
        <Button
          onclickEvent={() => navigate(`/asset-digitalize/${userId}`)}
          description={"Asset Digitalize"}
        />
        <HoverCard>
          <HoverCardTrigger>
            <Label htmlFor="text"> Trasnsfer Ownership </Label>
          </HoverCardTrigger>
          <HoverCardContent>
            <InputBox
              componentInfo={{
                defaultValue: undefined,
                className: "to_class",
                type: "text",
                name: "toAddress",
                description: "Enter To Address",
                pattern: "",
                maxlength: 10,
              }}
              handleInput={onAssetChange}
            />
            <InputBox
              componentInfo={{
                defaultValue: undefined,
                className: "token_class",
                type: "text",
                name: "tokenId",
                description: "Enter Token Id",
                pattern: "",
                maxlength: 10,
              }}
              handleInput={onAssetChange}
            />
            <Button
              onclickEvent={onClickAssetChange}
              description={"transfer"}
            />
          </HoverCardContent>
        </HoverCard>
      </div>
      <div>
        <Label> Collections </Label>
        <ShowCaseCard cardDetails={fetchedFromUser} />
      </div>
    </div>
  );
}

export default UserProfiles;
