import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "../../components/Form";
import ProfileCard from "../../components/ProfileCard";
import ContractETH from "../../../contract/ContractETH";
import token_abi from "../../../../../blockchain_client/ethereum/abi/token_abi";
import byteCode_token from "../../../../../blockchain_client/ethereum/byteCode/byteCode_Token";
import { toast } from "sonner";
import { Toaster } from "../../components/shadcn/BottomBanner";
import useAccount from "../hooks/useAccount";
import TokenModal from '../../../domains/modals/TokenModal';
import { useDispatch } from "react-redux";
import { createToken}  from '../../../controllers/actions/TokenActions'
import { addToken }  from '../../../controllers/actions/UserActions'
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
    // const _contract = new ContractETH("browser", window.ethereum);
    const { symbol, tokenName, numberOfTokens, tokenId } = token;
    if (symbol && tokenName && numberOfTokens) {
      // dispatch(createToken(token))
      dispatch(addToken({userId:userId,tokenId:tokenId}))
      // const contractAddress = await _contract.createContract(
      //   token_abi,
      //   byteCode_token,
      //   tokenName,
      //   symbol
      // );
      // const web = await _contract.interactWithContract(
      //   contractAddress,
      //   token_abi
      // );
      // return await web.mint(contractAddress, numberOfTokens.toString());
    } else {
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
  );
}

export default TokenCreation;
