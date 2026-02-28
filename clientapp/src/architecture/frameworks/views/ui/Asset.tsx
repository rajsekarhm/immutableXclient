import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProfileCard from "../../components/ProfileCard";
import TabsSwitch from "../../components/TabSwitch";
import { Toaster } from "../../components/shadcn/BottomBanner";
import { toast } from "sonner";
import { useSelector } from "react-redux";
import { RootState } from "../../../adapters/store";
import useAssetController from "../hooks/useAsset";
import useAuth from "../hooks/useAuth";
import AssetModal from "../../../domains/modals/AssetModal";
import { CreditCard, LogOut } from "lucide-react";
import PrimarySearchAppBar from "../../components/AppBar";
import "../css/Asset.css";
import { useState } from "react";
import useUserController from "../hooks/useAccount";


function AssetCreation() {
  const { isAuthenticated, logout } = useAuth();
    const { userid } = useParams()
    const userController = useUserController()
  const { firstName, lastName, email, userId, phoneNumber } =
    useSelector((state: RootState) => state.user.user) ?? {};
  const controller = useAssetController();
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

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/signin/users");
    }else{
      userController.execute('getUser', userid || userId);
    }

  }, [isAuthenticated, navigate]);

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
      await controller.execute('createAssetBlockchain', newDigitalizeAsset);
      toast(`Asset ${symbol} Have Been Minting. It Will take some time.`, {
        description: "Check in chain Explorer",
      });
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
        authDetails={{ isAuth: isAuthenticated }}
        isUserDetailsNeed={isAuthenticated}
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