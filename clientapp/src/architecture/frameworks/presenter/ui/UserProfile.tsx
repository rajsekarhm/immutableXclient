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
import { getAsset } from "../../../controllers/actions/AssetActions";
import { getToken } from "../../../controllers/actions/TokenActions";
import AppBar from "../../components/shadcn/AppBard";

function UserProfile() {
  const { account } = useWallet();
  const dispatch = useDispatch<AppDispatch>();
  const { firstName, lastName, phoneNumber, email, assetIds, tokenIds } =
    useAccount();
  const navigate = useNavigate();
  const assets = useSelector((state: any) => state.asset.asset);
  const tokens = useSelector((state: any) => state.token.token);

  const { userId } = useParams();
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
    : [
        {
          card_details: {
            id: "one",
            title: "Token X",
            content: {
              description: "No Asset Holding",
            },
          },
          buttonText: "View MarketPlace",
          onClick: () => {
            navigate(`/marketplace/${userId}`);
          },
          isInputNeed: true,
        },
      ];

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
    : [
        {
          card_details: {
            id: "one",
            title: "Asset IMX",
            content: {
              description: "No Asset Holding",
            },
          },
          buttonText: "View MarketPlace",
          onClick: () => {
            navigate(`/marketplace/${userId}`);
          },
          isInputNeed: true,
        },
      ];

  useEffect(() => {
    dispatch(getAsset({ assetAddress: account, assetIds }));
    dispatch(getToken({ tokenAddress: account, tokenIds: tokenIds }));
    // api call make to validate that user is authenticated
    if (false) {
      navigate("/sign-in/users");
    }
  }, [assetIds, tokenIds]);
  const actions = {
    onSearch: () => {},
    onAccountClick: () => {},
    OnMoreClick: () => {},
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
        text:"explorer",
        action:() => { console.log("onClick explorer")}
      },
      action2:{
        text:"blog",
        action:() => { console.log( "onClick blog")}
      }
    }
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
        <span> Total Balance </span> : 0
      </div>
      <div className="absolute top-0 left-15">
        <AppBar isAuth={false} showUserDetails={false} menuDetails={dropDown} isLeftSideNeeded={false} showCaseText="" />
        <ProfileCard
          name={firstName + lastName}
          mail={email}
          address={"india"}
          phone={phoneNumber}
        />
      </div>
      <br/>
      <br/>
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
            <span> Transfer Asset Ownership </span>
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
        <ShowCaseCard cardDetails={fetchedAssetFromUser} />
        <ShowCaseCard cardDetails={fetchedTokenFromUser} />
      </div>
    </div>
  );
}

export default UserProfile;
