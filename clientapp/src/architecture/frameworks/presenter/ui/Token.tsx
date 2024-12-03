import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "../../components/Form";
import ProfileCard from "../../components/ProfileCard";
import { toast } from "sonner";
import {CreditCard,LogOut} from 'lucide-react'
import { Toaster } from "../../components/shadcn/BottomBanner";
import useAccount from "../hooks/useAccount";
import TokenModal from '../../../domains/modals/TokenModal';
import { useDispatch } from "react-redux";
import { createToken, createTokenBlockchain}  from '../../../controllers/actions/TokenActions'
import { addToken }  from '../../../controllers/actions/UserActions'
import AppBar from "../../components/shadcn/AppBard";
function TokenCreation() {
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();
  const {firstName,lastName,email,phoneNumber,userId} = useAccount()
  const [token, setToken] = useState<TokenModal>({
    walletAddress: "",
    numberOfTokens: "",
    symbol: "",
    tokenName: "",
    tokenId:""
  });
  const handleChange = (event: any) => {
    event.preventDefault();
    const { name, value } = event.target;
    setToken({ ...token, [name]: value });
  };

  const handleClick = (event: any) => {};

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const { symbol, tokenName, numberOfTokens, tokenId } = token;
    if (symbol && tokenName && numberOfTokens) {
      dispatch(createTokenBlockchain(token))
      dispatch(createToken(token))
      dispatch(addToken({userId:userId,tokenId:tokenId}))
    }else {
      toast(`Token is Not Minted`, {
        description: "Give proper Details to mint token",
      });
    }
  };

  const form_field_schema3: any = {
    inputsFileds: [
      {
        defaultValue: undefined,
        description: "Enter token creation address",
        className: "wallet_class",
        type: "text",
        name: "walletAddress",
        maxlength: 100,
      },
      {
        defaultValue: undefined,
        description: "Enter number of token (in Millions) ",
        className: "price_class",
        type: "string",
        name: "numberOfTokens",
        maxlength: 10,
      },
      {
        defaultValue: undefined,
        description: "Enter Symbol",
        className: "symbol_class",
        type: "text",
        name: "symbol",
        maxlength: 10,
      },
      {
        defaultValue: undefined,
        description: "Enter Token Name",
        className: "tokenname_class",
        type: "text",
        name: "tokenName",
        maxlength: 100,
      },
      {
        defaultValue: undefined,
        description: "Enter Token Id",
        className: "tokenId_class",
        type: "text",
        name: "tokenId",
        maxlength: 100,
      }
    ],
    isSelectFieldsNeed: false,
  };

  useEffect(() => {
    // api call make to validate that user is authenticated
    if (true) {
      return;
    }
    navigate("/sign-in/users");
  }, []);

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
      <div style={{ width: "300px", position: "absolute", top: 0, right: 0 }}>
        <ProfileCard
          name={firstName + lastName}
          mail={email}
          address={"india"}
          phone={phoneNumber}
        />
      </div>

      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "900px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginTop: "20px",
        }}
      >
        <section
          style={{
            width: "400px",
            padding: "20px",
            background: "white",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            borderRadius: "8px",
            textAlign: "center",
            marginTop: "50px",
          }}
        >
          <h2>Tokenization Asset</h2>
          <Form
            schema={form_field_schema3}
            handleChange={handleChange}
            handleClick={handleClick}
            onSubmit={handleSubmit}
          />
        </section>
      </div>
      <Toaster />
    </div>
    </>
  );
}

export default TokenCreation;
