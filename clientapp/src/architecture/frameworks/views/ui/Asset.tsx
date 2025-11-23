import { useNavigate } from "react-router-dom";
import ProfileCard from "../../components/ProfileCard";
import TabsSwitch from "../../components/TabSwitch";
import { Toaster } from "../../components/shadcn/BottomBanner";
import { toast } from "sonner";
import useAccount from "../hooks/useAccount";
import { useDispatch } from "react-redux";
import { createAsset, createAssetBlockchain } from "../../../adapters/actions/AssetActions";
import AssetModal from "../../../domains/modals/AssetModal";
import { addAsset } from "../../../adapters/actions/UserActions";
import { CreditCard, LogOut } from "lucide-react";
import PrimarySearchAppBar from "../../components/AppBar";
import "../css/Asset.css";
import { useState } from "react";


function AssetCreation() {
  const { firstName, lastName, email, userId, phoneNumber } = useAccount();
  const dispatch = useDispatch<any>();
  const [newDigitalizeAsset, setDigitalizeAsset] = useState<AssetModal>({
    assetId:null,
    symbol: null,
    assetURI: null,
    value: 0,
    assetAddress: null,
    isValidated: false,
    associatedUser: null,
    isForSale: false,
    isFungible: false,
  });
  const navigate = useNavigate();

  function handleChanges(event: any) {
    const { name, value } = event.target;
    setDigitalizeAsset({ ...newDigitalizeAsset, [name]: value });
  }

  async function handleClick(event: any) {
    event.preventDefault();
    newDigitalizeAsset["associatedUser"] = userId;
    const { symbol, assetAddress, value, assetId, assetURI } = newDigitalizeAsset;
    try {
      if(!(symbol && assetAddress && value && assetId)){
        throw new Error("UNDEFINED ASSET DETAILS");
      }
      dispatch(createAssetBlockchain(newDigitalizeAsset));
      toast(`Asset ${symbol} Have Been Minting. It Will take some time.`, {
        description: "Check in chain Explorer",
      });
      // window.location.reload();
    } catch (err) {
      toast(`Asset ${symbol} was Not Minted`, {
        description: "Issue related to asset details or blockchain",
      });
    }
  }

  const switch1_details = {
    card_details: [
      { name: "assetId", value: "assetId", description: "" },
      { name: "value", value: "value", description: "" },
      { name: "assetURI", value: "assetURI", description: "" },
      { name: "isFungible", value: "isFungible", description: "" },
      { name: "symbol", value: "symbol", description: "" },
      { name: "assetAddress", value: "assetAddress", description: "" },
    ],
    onChanges: handleChanges,
    onClick: handleClick,
  };

  return (
    <div className="asset-container">
      <PrimarySearchAppBar
        authDetails={{ isAuth: !!userId }}
        isUserDetailsNeed={!!userId}
        userDetails={{ firstName, lastName, email, userId }}
      />
      <div className="asset-grid">
        <TabsSwitch tabsDetails={switch1_details} />
      </div>
      <Toaster />
    </div>
  );
}

export default AssetCreation;