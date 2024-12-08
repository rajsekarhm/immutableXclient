import { requestAPI } from "../../../requests/core/request";
import server_config from "../../../../server.config";
import REQUEST_API from "../../../requests/api.config";
import ContractETH from "../../contract/ContractETH";
import token_abi from "../../../../blockchain_client/ethereum/abi/token_abi";
import ITokenRepository from "../../domains/repository/ITokenRepository";
import TokenEntity from "../../domains/entities/TokenEntity";
import TokenModal from "../../domains/modals/TokenModal";
import byteCode_token from "../../../../blockchain_client/ethereum/byteCode/byteCode_Token";
import { useDispatch } from "react-redux";

class TokenRepository implements ITokenRepository{

    async createToken(token: TokenModal | TokenEntity | any, errorHandler?: any):Promise<any> {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify(token);
        var requestOptions: any = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };
    
        return await fetch(
          "http://127.0.0.1:8080/api/v1/token/createToken",
          requestOptions
        )
          .then((response) => response.text())
          .then((result) => console.log(result))
          .catch((error) => console.log("error", error));
    }
    async getTokenById(ids: string | any, errorHandler?: any):Promise<any> {
        const {rejectWithValue} = errorHandler
        try {
            const tokenResponses = await Promise.allSettled(
                ids.map(async (id: any) => {
                return await requestAPI( `${server_config.host}:${server_config.port}/${REQUEST_API.GET_TOKEN}?tokenId=${id}`,"GET")})
            );
      
            const fulfilledResponses = tokenResponses
              .filter((result) => result.status === "fulfilled")
              .map((result: any) => result.value);
            return fulfilledResponses;
          } catch (error: any) {
            console.error("Error in getToken:", error);
            return rejectWithValue(error.message || "Error occurred");
          }
    }
    async createTokenOnChain(token: TokenModal | TokenEntity | any, errorHandler?: any): Promise<any> {
       const dispatch = useDispatch<any>()
      const contract_factory =  new ContractETH('browser',window.ethereum)
      const contractAddress = await contract_factory.createContract(token_abi,byteCode_token)
      var {walletAddress,numberOfTokens,Symbol,tokenName,tokenId} = token
      const web = await  contract_factory.interactWithContract(contractAddress,token_abi)
      await web.mint(walletAddress,numberOfTokens)
      token.walletAddress = contractAddress
      dispatch(this.createToken(token))
    }
    getTokenOnChain(tokenId: any, errorHandler?: any) {
        throw new Error("Method not implemented.");
    }


}

export default new TokenRepository()