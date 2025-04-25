import REQUEST_API from "../../../requests/api.config";
import ContractETH from "../../contract/ContractETH";
import token_abi from "../../../../blockchain_client/ethereum/abi/token_abi";
import ITokenRepository from "../../domains/repository/ITokenRepository";
import TokenEntity from "../../domains/entities/TokenEntity";
import TokenModal from "../../domains/modals/TokenModal";
import byteCode_token from "../../../../blockchain_client/ethereum/byteCode/byteCode_Token";
import { useDispatch } from "react-redux";
import requestAPI from "../../../requests/core/request";
import BASE_ENDPOINT_V1 from "../../../../server.config";

class TokenRepository implements ITokenRepository{

    async createToken(token: TokenModal | TokenEntity | any, errorHandler?: any):Promise<any> {
      try{
        return await requestAPI(`${BASE_ENDPOINT_V1}${REQUEST_API.TOKEN.CREATE_TOKEN}`, 'POST', token, 'application/json');
      }catch(error){
        return
      }
      
    }
    
    async getTokenById(id: string | any, errorHandler?: any):Promise<any> {
        const {rejectWithValue} = errorHandler
        try {
          //  await makeRequest(`${API_BASE_URL}/token/getToken?tokenId=69`,"GET",{},'application/json');
          return await requestAPI(`${BASE_ENDPOINT_V1}${REQUEST_API.TOKEN.GET_TOKEN}?tokenId=${id}`,"GET",{},'application/json');
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