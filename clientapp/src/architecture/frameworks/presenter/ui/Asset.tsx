import { useParams } from "react-router-dom";
import ProfileCard from "../../components/ProfileCard";
import TabsSwitch from "../../components/TabSwitch";
import { useEffect, useState } from "react";
import { Toaster } from "../../components/shadcn/BottomBanner";
import { toast } from "sonner";
import { Skeleton } from "../../components/shadcn/Skeleton";
import useAccount from "../hooks/useAccount";
import { useDispatch, useSelector } from "react-redux";
import { createAsset } from "../../../controllers/actions/AssetActions"
import { useWallet } from "../hooks/useWallet";
import AssetModal  from '../../../domains/modals/AssetModal';
import { createUser } from "../../../controllers/actions/UserActions";
function AssetCreation() {
  const { firstName, lastName, email, userId, phoneNumber } = useAccount();
  const dispatch = useDispatch<any>();
  const [onLoading, setLoading] = useState(false);
  const currentUser = useSelector((state:any) => state.user.user)
  const [newDigitalizeAsset, setDigitalizeAsset] = useState<AssetModal>({
    symbol:"",
    walletAddress: "" ,
    ownerAddress: "" ,
    isValidated: false,
    tokenId: "" ,
    tokenURI: "" ,
    value: "",
    associatedUser:"",
    isForSale:false,
  });

  function handleChanges(event: any) {
    const { name, value } = event.target;
    setDigitalizeAsset({ ...newDigitalizeAsset, [name]: value });
  }

  async function handleClick(event: any) {
    event.preventDefault();
    // api call  {}
    const { symbol,walletAddress,value,tokenId,tokenURI } = newDigitalizeAsset;
    currentUser.tokenId = [...new Set(currentUser.tokenId.push(tokenId))]
    console.log(currentUser)
    // dispatch(createUser(currentUser))
    // dispatch(createAsset({ symbol,walletAddress,value,tokenId,tokenURI }))
     toast(`Asset ${symbol} Have Been Minted`, {
       description: "check in chain Explorer",
    });
  }

  const switch1_details = {
    card_details: [
      {
        name: "tokenId",
        value: "tokenId",
        description: "",
      },
      {
        name: "value",
        value: "value",
        description: "",
      },
      {
        name: "tokenURI",
        value: "tokenURI",
        description: "",
      },
      {
        name: "isFungible",
        value: "isFungible",
        description: "",
      },
      {
        name: "symbol",
        value: "symbol",
        description: "",
      },
      {
        name: "walletAddress",
        value: "walletAddress",
        description: "",
      },
    ],
    onChanges: handleChanges,
    onClick: handleClick,
  };
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
      {/* {onLoading ? <Skeleton> : null} */}
      <div style={{ width: "300px", position: "absolute", top: 0, right: 0 }}>
        <ProfileCard
          name={firstName + lastName}
          mail={email}
          address={"india"}
          phone={phoneNumber}
        />
      </div>
      <div>
        <TabsSwitch tabsDetails={switch1_details} />
      </div>
      <Toaster />
      {/* {onLoading ? </Skeleton> : null} */}
    </div>
  );
}

export default AssetCreation;
