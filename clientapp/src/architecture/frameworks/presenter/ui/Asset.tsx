import { useNavigate, useParams } from "react-router-dom";
import ProfileCard from "../../components/ProfileCard";
import TabsSwitch from "../../components/TabSwitch";
import { useEffect, useState } from "react";
import { Toaster } from "../../components/shadcn/BottomBanner";
import { toast } from "sonner";
import { Skeleton } from "../../components/shadcn/Skeleton";
import useAccount from "../hooks/useAccount";
import { useDispatch, useSelector } from "react-redux";
import { createAsset, createAssetBlockchain } from "../../../controllers/actions/AssetActions";
import AssetModal from "../../../domains/modals/AssetModal";
import { addAsset } from "../../../controllers/actions/UserActions";
import { CreditCard, LogOut} from "lucide-react"
import AppBar from "../../components/shadcn/AppBard";
function AssetCreation() {
  const { firstName, lastName, email, userId, phoneNumber } = useAccount();
  const dispatch = useDispatch<any>();
  const [onLoading, setLoading] = useState(false);
  const [newDigitalizeAsset, setDigitalizeAsset] = useState<AssetModal>({
    assetId: "",
    symbol: "",
    assetURI: "",
    value: 0,
    assetAddress: "",
    isValidated: false,
    associatedUser: "",
    isForSale: false,
    isFungible: false,
  });
  const navigate = useNavigate()
  function handleChanges(event: any) {
    const { name, value } = event.target;
    setDigitalizeAsset({ ...newDigitalizeAsset, [name]: value });
  }

  async function handleClick(event: any) {
    event.preventDefault();
    newDigitalizeAsset["associatedUser"] = userId;
    const { symbol, assetAddress, value, assetId, assetURI } = newDigitalizeAsset;
    dispatch(createAssetBlockchain(newDigitalizeAsset))
    dispatch(createAsset(newDigitalizeAsset));
    dispatch(addAsset({ assetId: assetId, userId: userId }));
    toast(`Asset ${symbol} Have Been Minted`, {
      description: "check in chain Explorer",
    });
    window.location.href
  }

  const switch1_details = {
    card_details: [
      {
        name: "assetId",
        value: "assetId",
        description: "",
      },
      {
        name: "value",
        value: "value",
        description: "",
      },
      {
        name: "assetURI",
        value: "assetURI",
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
        name: "assetAddress",
        value: "assetAddress",
        description: "",
      },
    ],
    onChanges: handleChanges,
    onClick: handleClick,
  };
  const dropDown = {
    dropDownText:"Home",
    title: "Account",
    details: [
      {
        element: <CreditCard />,
        text: "Dashboard",
        itHasSubtab: false,
        subTab: null,
        onClick: () => { navigate(`/portfolio/${userId}`)},
      },
      {
        element: <LogOut />,
        text: "Logout",
        itHasSubtab: false,
        subTab: null,
        onClick: () => { navigate('/') },
      },
    ],
    onMore: {
      action1:{
        text:"Markeplace",
        action:() => { navigate(`/marketplace/${userId}`)}
      }
    }
  };

  return (
    <>
    <div className="absolute top-5 left-15" >
    <AppBar isAuth={false} showUserDetails={false} menuDetails={dropDown} isLeftSideNeeded={false} showCaseText="" />
    </div>
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
      <br/>
      <br/> 
      <br/>
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
    </>
  );
}

export default AssetCreation;
