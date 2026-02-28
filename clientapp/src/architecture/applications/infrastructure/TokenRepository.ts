import { Store } from 'redux';
import ITokenRepository from '../../domains/repository/ITokenRepository';
import { setTokenLoading, setTokenData, setTokenError } from '../../adapters/actions/TokenActions';
import ContractETH from '../../contract/ContractETH';
import token_abi from '../../../../blockchain_client/ethereum/abi/token_abi';
import byteCode_token from '../../../../blockchain_client/ethereum/byteCode/byteCode_Token';
import requestAPI from '../../../requests/core/request';
import BASE_ENDPOINT_V1 from '../../../../server.config';
import REQUEST_API from '../../../requests/api.config';

class TokenRepository implements ITokenRepository {
  constructor(private store: Store) {}

  getTokenState() {
    return this.store.getState().token;
  }

  async createToken(tokenDetails: any) {
    this.store.dispatch(setTokenLoading());
    try {
      const result = await requestAPI(
        `${BASE_ENDPOINT_V1}${REQUEST_API.TOKEN.CREATE_TOKEN}`,
        'POST', tokenDetails, 'application/json'
      );
      this.store.dispatch(setTokenData(result.data));
      return result;
    } catch (error: any) {
      this.store.dispatch(setTokenError(error.message || 'Failed to create token'));
      throw error;
    }
  }

  async getTokenById(id: string) {
    this.store.dispatch(setTokenLoading());
    try {
      const result = await requestAPI(
        `${BASE_ENDPOINT_V1}${REQUEST_API.TOKEN.GET_TOKEN}${id}`,
        'GET', {}, 'application/json'
      );
      this.store.dispatch(setTokenData(result.data));
      return result;
    } catch (error: any) {
      this.store.dispatch(setTokenError(error.message || 'Failed to get token'));
      throw error;
    }
  }

  async createTokenOnChain(tokenDetails: any) {
    this.store.dispatch(setTokenLoading());
    try {
      const contractFactory = new ContractETH('browser', window.ethereum);
      const { walletAddress, numberOfTokens, Symbol, tokenName } = tokenDetails;
      const contractAddress = await contractFactory.createContract(
        token_abi, byteCode_token, tokenName, Symbol
      );
      const contract = await contractFactory.interactWithContract(contractAddress, token_abi);
      await contract.mint(walletAddress, numberOfTokens);

      tokenDetails.walletAddress = contractAddress;
      const result = await this.createToken(tokenDetails);
      return result;
    } catch (error: any) {
      this.store.dispatch(setTokenError(error.message || 'Failed to create token on chain'));
      throw error;
    }
  }

  async getTokenOnChain(tokenAddress: string, tokenId: string) {
    this.store.dispatch(setTokenLoading());
    try {
      const contractFactory = new ContractETH('browser', window.ethereum);
      const contract = await contractFactory.interactWithContract(tokenAddress, token_abi);
      const result = await contract.getToken(tokenId);
      this.store.dispatch(setTokenData(result));
      return result;
    } catch (error: any) {
      this.store.dispatch(setTokenError(error.message || 'Failed to get token from chain'));
      throw error;
    }
  }
}

export default TokenRepository;