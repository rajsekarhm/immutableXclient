import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "../../components/Form";
import { browserStorage } from "../../../../helpers/Storage";
import ProfileCard from "../../components/ProfileCard";
import AssetEntity from "../../../domains/entities/AssetEntity";
import ShowCaseCard from "../../components/ShowCaseCard";
import { Label } from "../../components/shadcn/Label";
import Button from "../../components/Button";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "../../components/shadcn/HoverCard";
import { InputBox } from "../../components/InputBox";
import { useSelector } from "react-redux";

function UserProfiles() {
  const { username }: any = useParams();
  const [userProfile, setUserProfile]: any = useState(useSelector((state:any) => state.user_actions))
  const {firstname, lastname, phoneNumber,email} = userProfile
  console.log({firstname, lastname, phoneNumber,email})
  const navigate = useNavigate();
  const [transferOwner,settransferOwner] = useState({
    to:null,
    tokenId:null
  })
  function onAssetChange(event:any) {
    const {name,value} = event
    settransferOwner({...transferOwner,[name]:value})
  }
  function onClickAssetChange(event:any){
    event.preventDefault()
    console.log(transferOwner)
  }
  const { assetHolding }: any = browserStorage.getFromStorage("raja");
  const [assetHoldings, setAssetHoldings] = useState(assetHolding);
  const mockAsset = [
    {
      card_details: {
        id: "one",
        title: "Holdings",
        content: {
          description: "about asset",
          walletAddress: "0x212f916DCfF88AC66883a2175de5BDa52C6bA968",
          status: "pending",
          value: "$ 1000 ",
          uri: "ipfs link",
          tokenId: "17710",
        },
      },
      buttonText: "View Explorer",
      onClick: () => {},
      isInputNeed: true,
    },
  ];

  useEffect(() => {
    // api call make to validate that user is authenticated
    if (true) {
      return;
    }
    navigate("/sign-in/users");
  }, []);

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
          name={firstname}
          description={lastname}
          mail={email}
          address={'india'}
          phone={phoneNumber}
        />
      </div>
      <div className="grid gap-4 py-4">
        <Button
          onclickEvent={() => navigate("/tokenization")}
          description={"Tokenization"}
        />
        <Button
          onclickEvent={() => navigate("/asset-digitalize")}
          description={"Asset Digitalize"}
        />
        <HoverCard>
          <HoverCardTrigger>
            <Label htmlFor="text"> Trasnsfer Ownership </Label>
          </HoverCardTrigger>
          <HoverCardContent >
           <InputBox componentInfo={{
                defaultValue: undefined,
                className: "to_class",
                type: "text",
                name: "toAddress",
                description: "Enter To Address",
                pattern: "",
                maxlength: 10,
              }}
              handleInput={onAssetChange} />
           <InputBox componentInfo={{
                defaultValue: undefined,
                className: "token_class",
                type: "text",
                name: "tokenId",
                description: "Enter Token Id",
                pattern: "",
                maxlength: 10,
              }}
              handleInput={onAssetChange}/>
            <Button onclickEvent={onClickAssetChange} description={"transfer"}/>
          </HoverCardContent>
        </HoverCard>
      </div>
      <div>
        <Label> Collections </Label>
        <ShowCaseCard cardDetails={mockAsset} />
      </div>
    </div>
  );
}

export default UserProfiles;
