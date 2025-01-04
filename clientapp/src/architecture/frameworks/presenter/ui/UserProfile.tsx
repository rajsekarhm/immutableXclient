import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProfileCard from "../../components/ProfileCard";
import ShowCaseCard from "../../components/ShowCaseCard";
import { Label } from "../../components/shadcn/Label";
import Button from "../../components/Button";
import { Briefcase, DollarSign, CreditCard, LogOut } from "lucide-react";
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
import { transferOwnerAsset } from "../../../controllers/actions/AssetActions";
import AppBar from "../../components/shadcn/AppBard";
import AssetModal from "../../../domains/modals/AssetModal";

function UserProfile() {
  const { account } = useWallet();
  const [netValue,setnetvalue] =  useState<number>(0);
  const navigate = useNavigate();
  const { userId } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { firstName, lastName, phoneNumber, email, assetIds, tokenIds, assets, tokens } = useAccount();
  const [transferOwner, settransferOwner] = useState({
    toAddress: null,
    asstIdTo: null,
    receiverId: null,
  });

  function onAssetChange(event: any) {
    const { name, value } = event.target;
    settransferOwner({ ...transferOwner, [name]: value });
  }
  function onClickAssetChange(event: any) {
    event.preventDefault();
    const { asstIdTo, toAddress, receiverId } = transferOwner;
    const assetToTransfer = assets
      .filter((asset: AssetModal) => {
        if (asstIdTo == asset.assetId) {
          return true;
        }
      })
      .filter(Boolean);
    assetToTransfer.length == 1 &&
      dispatch(
        transferOwnerAsset({
          asset: assetToTransfer.pop(),
          newAddress: toAddress,
          receiverId: receiverId,
        })
      );
    // window.location.reload()
  }

  function calculateNetvalue(){
    let netvalue = 0;
    assets.map((asset: any) => {
      netvalue += asset.value;
    });
    setnetvalue(netvalue);
  }

  const fetchedTokenFromUser = tokens.length
    ? tokens.map((token: any) => {
        return {
          card_details: {
            id: "one",
            title: "Token X",
            content: token,
          },
          buttonText: "View Explorer",
          onClick: () => {},
          isInputNeed: true,
        };
      })
    : null;

  const fetchedAssetFromUser = assets?.length
    ? assets.map((asset: any) => {
        return {
          card_details: {
            id: "one",
            title: "Asset IMX",
            content: asset,
          },
          buttonText: "View Explorer",
          onClick: () => {},
          isInputNeed: true,
        };
      })
    : null;

  useEffect(() => {
    // dispatch(getAsset({ assetAddress: account, assetIds }));
    // dispatch(getToken({ tokenAddress: account, tokenIds: tokenIds }));
    // api call make to validate that user is authenticated
    calculateNetvalue()
    if (false) {
      navigate("/sign-in/users");
    }
  }, [assetIds, tokenIds,netValue]);
  const actions = {
    onSearch: () => {},
    onAccountClick: () => {},
    OnMoreClick: () => {},
  };

  const dropDown = {
    dropDownText: "Home",
    title: "Account",
    details: [
      {
        element: <CreditCard />,
        text: "Marketplace",
        itHasSubtab: false,
        subTab: null,
        onClick: () => {
          navigate(`/marketplace/${userId}`);
        },
      },
      {
        element: <LogOut />,
        text: "Logout",
        itHasSubtab: false,
        subTab: null,
        onClick: () => {
          navigate("/");
        },
      },
    ],
    onMore: {
      action1: {
        text: "explorer",
        action: () => {
          console.log("onClick explorer");
        },
      },
      action2: {
        text: "blog",
        action: () => {
          console.log("onClick blog");
        },
      },
    },
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
      <div className="absolute top-5 left-5 flex items-center space-x-3">
        <Briefcase className="w-6 h-6 text-black-900" />
        <span>DashBoard</span>
        <DollarSign className="w-6 h-6 text-black-900" />
        <span> Total Balance </span> : $ {netValue}
      </div>
      <div className="absolute top-0 left-15">
        <AppBar
          isAuth={false}
          showUserDetails={false}
          menuDetails={dropDown}
          isLeftSideNeeded={false}
          showCaseText=""
        />
        <ProfileCard
          name={firstName + lastName}
          mail={email}
          address={"india"}
          phone={phoneNumber}
        />
      </div>
      <br />
      <br />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 mt-4">
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
            <Button
              onclickEvent={() => {}}
              description={"Transfer Asset Ownership"}
            />
          </HoverCardTrigger>
          <HoverCardContent>
            <InputBox
              componentInfo={{
                className: "to_class",
                type: "text",
                name: "toAddress",
                description: "Enter Receiver Address",
                pattern: "",
                maxlength: 100,
              }}
              handleInput={onAssetChange}
            />
            <InputBox
              componentInfo={{
                className: "token_class",
                type: "text",
                name: "asstIdTo",
                description: "Enter  Id",
                pattern: "",
                maxlength: 10,
              }}
              handleInput={onAssetChange}
            />
            <InputBox
              componentInfo={{
                className: "receiver_class",
                type: "text",
                name: "receiverId",
                description: "Enter  Receiver Id",
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
        {fetchedAssetFromUser ? (
          <ShowCaseCard cardDetails={fetchedAssetFromUser} />
        ) : null}
        {fetchedAssetFromUser ? (
          <ShowCaseCard cardDetails={fetchedTokenFromUser} />
        ) : null}
      </div>
    </div>
  );
}

export default UserProfile;
