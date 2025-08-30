import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
import { useDispatch } from "react-redux";
import { AppDispatch } from "architecture/adapters/store";
import { transferOwnerAsset } from "../../../adapters/actions/AssetActions";
import AssetModal from "../../../domains/modals/AssetModal";
import PrimarySearchAppBar from "../../components/AppBar";
import "../css/UserProfile.css";

function UserProfile() {
  const [netValue, setNetValue] = useState<number>(0);
  const navigate = useNavigate();
  const { userId } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { firstName, lastName, phoneNumber, email, assetIds, tokenIds, assets, tokens } = useAccount();
  const [transferOwner, setTransferOwner] = useState({
    toAddress: null,
    asstIdTo: null,
    receiverId: null,
  });

  function onAssetChange(event: any) {
    const { name, value } = event.target;
    setTransferOwner({ ...transferOwner, [name]: value });
  }

  function onClickAssetChange(event: any) {
    event.preventDefault();
    const { asstIdTo, toAddress, receiverId } = transferOwner;
    const assetToTransfer = assets
      .filter((asset: AssetModal) => asstIdTo === asset.assetId)
      .filter(Boolean);
    if (assetToTransfer.length === 1) {
      dispatch(
        transferOwnerAsset({
          asset: assetToTransfer.pop(),
          newAddress: toAddress,
          receiverId: receiverId,
        })
      );
    }
  }

  function calculateNetValue() {
    const total = assets.reduce((acc: any, asset: any) => acc + (asset.value || 0), 0);
    setNetValue(total);
  }

  const fetchedTokenFromUser = Array.isArray(tokens) && tokens.length
    ? tokens.map((token: any) => ({
        card_details: {
          id: "one",
          title: "Token X",
          content: token,
        },
        buttonText: "View Explorer",
        onClick: () => {},
        isInputNeed: true,
      }))
    : null;

  const fetchedAssetFromUser = Array.isArray(assets) && assets.length
    ? assets.map((asset: any) => ({
        card_details: {
          id: "one",
          title: "Asset IMX",
          content: asset,
        },
        buttonText: "View Explorer",
        onClick: () => {},
        isInputNeed: true,
      }))
    : null;

  useEffect(() => {
    calculateNetValue();
    if (false) {
      navigate("/sign-in/users");
    }
  }, [assetIds, tokenIds, netValue]);

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
    <div className="user-profile-container">
      <PrimarySearchAppBar
        actionEvents={actions}
        authDetails={{ isAuth: !!userId }}
        isUserDetailsNeed={!!userId}
        userDetails={{ firstName, lastName, email, userId }}
      />
      <div className="user-profile-header">
        <Briefcase className="icon" />
        <span>DashBoard</span>
        <DollarSign className="icon" />
        <span>Total Balance</span>: ${netValue}
      </div>
      <div className="user-profile-grid">
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
                description: "Enter Id",
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
                description: "Enter Receiver Id",
                pattern: "",
                maxlength: 10,
              }}
              handleInput={onAssetChange}
            />
            <Button
              onclickEvent={onClickAssetChange}
              description={"Transfer"}
            />
          </HoverCardContent>
        </HoverCard>
      </div>
      <div className="user-profile-collections">
        <Label className="w-full">Collections</Label>
        {fetchedAssetFromUser ? (
          <ShowCaseCard cardDetails={fetchedAssetFromUser} />
        ) : null}
        {fetchedTokenFromUser ? (
          <ShowCaseCard cardDetails={fetchedTokenFromUser} />
        ) : null}
      </div>
    </div>
  );
}

export default UserProfile;