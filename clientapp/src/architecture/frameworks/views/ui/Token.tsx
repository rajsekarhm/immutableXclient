import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "../../components/Form";
import { toast } from "sonner";
import { CreditCard, LogOut } from "lucide-react";
import { Toaster } from "../../components/shadcn/BottomBanner";
import useAccount from "../hooks/useAccount";
import { useDispatch } from "react-redux";
import { addToken } from "../../../adapters/actions/UserActions";
import { createToken, createTokenBlockchain } from "../../../adapters/actions/TokenActions";
import PrimarySearchAppBar from "../../components/AppBar";
import "../css/Token.css";

function TokenCreation() {
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();
  const { firstName, lastName, email, phoneNumber, userId } = useAccount();

  const accountDetails = useMemo(() => {
    return { firstName, lastName, email, phoneNumber, userId };
  }, [firstName, lastName, email, phoneNumber, userId]);

  const [token, setToken] = useState({
    walletAddress: "",
    numberOfTokens: "",
    symbol: "",
    tokenName: "",
    tokenId: "",
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setToken({ ...token, [name]: value });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const { symbol, tokenName, numberOfTokens, tokenId } = token;
    if (symbol && tokenName && numberOfTokens) {
      try {
        console.log(token)
        dispatch(createTokenBlockchain(token))
        // dispatch(createToken(token));
        // dispatch(addToken({ userId: userId, tokenId: tokenId }));
        toast(`Token ${symbol} has been minted`, {
          description: "Check in chain Explorer",
        });
        // window.location.reload();
      } catch (err) {
        toast(`Token is not minted`, {
          description: "Provide proper details to mint the token",
        });
      }
    } else {
      toast(`Token is not minted`, {
        description: "Provide proper details to mint the token",
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
        description: "Enter number of tokens (in millions)",
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
      },
    ],
    isSelectFieldsNeed: false,
  };

  useEffect(() => {
    if (!userId) {
      navigate("/sign-in/users");
    }
  }, [userId, navigate]);

  const dropDown = {
    dropDownText: "Home",
    title: "Account",
    details: [
      {
        element: <CreditCard />,
        text: "Dashboard",
        itHasSubtab: false,
        subTab: null,
        onClick: () => {
          navigate(`/portfolio/${userId}`);
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
        text: "Marketplace",
        action: () => {
          navigate(`/marketplace/${userId}`);
        },
      },
    },
  };

  return (
    <div className="token-container">
      <PrimarySearchAppBar
        authDetails={{ isAuth: !!userId }}
        isUserDetailsNeed={!!userId}
        userDetails={{ firstName, lastName, email, userId }}
      />
      <div className="token-content">
        <section className="token-card">
          <h2 className="token-header">Tokenization Asset</h2>
          <Form
            schema={form_field_schema3}
            handleChange={handleChange}
            onSubmit={handleSubmit} handleClick={function (event: any) {
              throw new Error("Function not implemented.");
            } }          />
        </section>
      </div>
      <Toaster />
    </div>
  );
}

export default TokenCreation;