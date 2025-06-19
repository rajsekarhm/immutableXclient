import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "../../components/Form";
import ProfileCard from "../../components/ProfileCard";
import { toast } from "sonner";
import {CreditCard,LogOut} from 'lucide-react'
import { Toaster } from "../../components/shadcn/BottomBanner";
import useAccount from "../hooks/useAccount";
import TokenModal from '../../../domains/modals/TokenModal';
import { useDispatch } from "react-redux";
import { createTokenBlockchain, createToken }  from '../../../adapters/actions/TokenActions'
import { addToken }  from '../../../adapters/actions/UserActions'
import AppBar from "../../components/shadcn/AppBard";
function TokenCreation() {
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();
  const {firstName,lastName,email,phoneNumber,userId} = useAccount()

  const accountDetails = useMemo(() => {
    return { firstName, lastName, email, phoneNumber, userId }
  }, [firstName, lastName, email, phoneNumber, userId])
  
  const [token, setToken] = useState<TokenModal>({
    walletAddress: "",
    numberOfTokens: "",
    symbol: "",
    tokenName: "",
    tokenId:""
  });

  useEffect(() => {
    if (accountDetails.userId) {
      console.log("User changed:", accountDetails)
    }
  }, [accountDetails])

  const handleChange = (event: any) => {
    event.preventDefault();
    console.log({token })
    const { name, value } = event.target;
    setToken({ ...token, [name]: value });
  };

  const handleClick = (event: any) => {
    console.log(event)
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const { symbol, tokenName, numberOfTokens, tokenId } = token;
    if (symbol && tokenName && numberOfTokens) {
      try{
        console.log(token)
        // dispatch(createTokenBlockchain(token))
        dispatch(createToken(token))
        dispatch(addToken({userId:userId,tokenId:tokenId}))
        toast(`Token ${symbol} Have Been Minted`, {
          description: "Check in chain Explorer",
        });
        window.location.reload()
      } catch(err){
        toast(`Token is Not Minted`, {
          description: "Give proper Details to mint token",
        });
      }
    }else {
      toast(`Token is Not Minted`, {
        description: "Give proper Details to mint token",
      });
    }
    window.location.href
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
        text:"Marketplace",
        action:() => { navigate(`/marketplace/${userId}`)}
      }
    }
  };

  return (
    <div
      style={{
        background: "white",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Centered AppBar */}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <AppBar
          isAuth={false}
          showUserDetails={false}
          menuDetails={dropDown}
          isLeftSideNeeded={false}
          showCaseText=""
        />
      </div>
  
      {/* Main content container centered */}
      <div
        style={{
          flex: 1,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        {/* Profile Card on right side */}
        <div
          style={{
            position: "absolute",
            top: "30px",
            right: "30px",
            width: "300px",
          }}
        >
          <ProfileCard
            name={firstName + lastName}
            mail={email}
            address={"India"}
            phone={phoneNumber}
          />
        </div>
  
        {/* Centered Form Card */}
        <section
          style={{
            width: "400px",
            padding: "20px",
            background: "white",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            borderRadius: "8px",
            textAlign: "center",
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
  );
  
}

export default TokenCreation;
