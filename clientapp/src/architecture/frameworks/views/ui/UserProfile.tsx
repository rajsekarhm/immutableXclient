import React, { useCallback, useEffect, useMemo, useState } from "react";
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
import { useSelector } from "react-redux";
import { RootState } from "../../../adapters/store";
import useAssetController from "../hooks/useAsset";
import useSession from "../hooks/useSession";
import AssetModal from "../../../domains/modals/AssetModal";
import PrimarySearchAppBar from "../../components/AppBar";
import "../css/UserProfile.css";

function UserProfile() {
  const [netValue, setNetValue] = useState<number>(0);
  const navigate = useNavigate();
  const { userid } = useParams();
  const { session, isAuthenticated, user: sessionUser, isHydrating, logout } = useSession();
  const assetController = useAssetController();
  const { user, assets, tokens } = useSelector((state: RootState) => state.user);

  // Resolve userId: prefer URL param, fall back to JWT claim
  const resolvedUserId = userid || session?.sub;
  const { firstName, lastName, phoneNumber, email, assetIds, tokenIds } = user ?? {};
  const [transferOwner, setTransferOwner] = useState({
    toAddress: null,
    asstIdTo: null,
    receiverId: null,
  });

  function onAssetChange(event: any) {
    const { name, value } = event.target;
    setTransferOwner({ ...transferOwner, [name]: value });
  }

  async function onClickAssetChange(event: any) {
    event.preventDefault();
    const { asstIdTo, toAddress, receiverId } = transferOwner;
    const assetToTransfer = assets
      .filter((asset: AssetModal) => asstIdTo === asset.assetId)
      .filter(Boolean);

    if (assetToTransfer.length === 1) {
      await assetController.execute('transferOwnership', {
        asset: assetToTransfer[0],
        newAddress: toAddress,
        receiverId: receiverId,
      });
    }
  }

  function calculateNetValue() {
    const total = assets.reduce((acc: any, asset: any) => acc + (asset.value || 0), 0);
    setNetValue(total);
  }

  const fetchedTokenFromUser = useMemo(() => {
    if (!Array.isArray(tokens) || tokens.length === 0) return null;
  
    return tokens.map((token: any) => ({
      card_details: {
        id: "one",
        title: "Token X",
        content: token,
      },
      buttonText: "View Explorer",
      onClick: () => {},
      isInputNeed: true,
    }));
  }, [tokens]);
  
  const fetchedAssetFromUser = useMemo(() => {
    if (!Array.isArray(assets) || assets.length === 0) return null;
  
    return assets.map((asset: any) => ({
      card_details: {
        id: "one",
        title: "Asset IMX",
        content: asset,
      },
      buttonText: "View Explorer",
      onClick: () => {},
      isInputNeed: true,
    }));
  }, [assets]);
  

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/signin/users");
      return;
    }
    // useSession auto-hydrates user data from JWT's sub claim
    // when Redux store is empty (e.g., after hard refresh).
    // No manual fetch needed here anymore.
  }, [isAuthenticated]);

  useEffect(() => {
    calculateNetValue();
  }, [assets]);



  return (
    <div className="user-profile-container">
      <PrimarySearchAppBar
        authDetails={{ isAuth: isAuthenticated }}
        isUserDetailsNeed={isAuthenticated}
        userDetails={{ firstName, lastName, email, userId: resolvedUserId }}
      />
      <div className="user-profile-header">
        <Briefcase className="icon" />
        <span>DashBoard</span>
        <DollarSign className="icon" />
        <span>Total Balance</span>: ${netValue}
      </div>
      <div className="user-profile-grid">
        <Button
          onclickEvent={useCallback(() => navigate(`/tokenization/${resolvedUserId}`),[resolvedUserId])}
          description={"Tokenization"}
        />
        <Button
          onclickEvent={useCallback(() => navigate(`/asset-digitalize/${resolvedUserId}`),[resolvedUserId])}
          description={"Asset Digitalize"}
        />
        <HoverCard>
          <HoverCardTrigger>
            <Button
              onclickEvent={useCallback(() => {},[])}
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