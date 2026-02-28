import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "../../components/Form";
import { toast } from "sonner";
import { CreditCard, LogOut } from "lucide-react";
import { Toaster } from "../../components/shadcn/BottomBanner";
import { useSelector } from "react-redux";
import { RootState } from "../../../adapters/store";
import useTokenController from "../hooks/useToken";
import useSession from "../hooks/useSession";
import PrimarySearchAppBar from "../../components/AppBar";
import "../css/Token.css";

function TokenCreation() {
  const { userid } = useParams()
  const navigate = useNavigate();
  const controller = useTokenController();
  const { session, isAuthenticated, logout } = useSession();
  const { firstName, lastName, email, phoneNumber, userId } =
    useSelector((state: RootState) => state.user.user) ?? {};

  // Resolve userId: prefer URL param, fall back to JWT claim
  const resolvedUserId = userid || session?.sub || userId;

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

    useEffect(() => {
    if (!isAuthenticated) {
      navigate("/signin/users");
      return;
    }
    // useSession auto-hydrates user data from JWT when Redux store is empty
  },[isAuthenticated])

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setToken({ ...token, [name]: value });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const { symbol, tokenName, numberOfTokens, tokenId } = token;
    if (symbol && tokenName && numberOfTokens) {
      try {
        await controller.execute('createTokenBlockchain', token);
        toast(`Token ${symbol} has been minted`, {
          description: "Check in chain Explorer",
        });
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

  // Auth redirect already handled above — no duplicate check needed

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
          navigate(`/portfolio/${resolvedUserId}`);
        },
      },
      {
        element: <LogOut />,
        text: "Logout",
        itHasSubtab: false,
        subTab: null,
        onClick: () => {
          logout();
          navigate("/");
        },
      },
    ],
    onMore: {
      action1: {
        text: "Marketplace",
        action: () => {
          navigate(`/marketplace/${resolvedUserId}`);
        },
      },
    },
  };

  return (
    <div className="token-container">
      <PrimarySearchAppBar
        authDetails={{ isAuth: isAuthenticated }}
        isUserDetailsNeed={isAuthenticated}
        userDetails={{ firstName, lastName, email, userId: resolvedUserId }}
      />
      <div className="token-content">
        <section className="token-card">
          <h2 className="token-header">Tokenization Asset</h2>
          <Form
            schema={form_field_schema3}
            handleChange={handleChange}
            onSubmit={handleSubmit}
            handleClick={handleSubmit}
          />
        </section>
      </div>
      <Toaster />
    </div>
  );
}

export default TokenCreation;