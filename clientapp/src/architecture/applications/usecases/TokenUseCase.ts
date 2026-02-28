import ITokenRepository from '../../domains/repository/ITokenRepository';
import ITokenUseCase from './Interface/ITokenUseCase';

class TokenUseCase implements ITokenUseCase {
  constructor(private tokenRepository: ITokenRepository) {}

  async createToken(tokenDetails: any) {
    if (!tokenDetails.tokenName || !tokenDetails.symbol) {
      throw new Error('Token name and symbol are required');
    }
    return this.tokenRepository.createToken(tokenDetails);
  }

  async getToken(tokenId: string) {
    if (!tokenId) {
      throw new Error('Token ID is required');
    }
    return this.tokenRepository.getTokenById(tokenId);
  }

  async createTokenOnBlockchain(tokenDetails: any) {
    if (!tokenDetails.walletAddress || !tokenDetails.tokenName) {
      throw new Error('Wallet address and token name are required');
    }
    return this.tokenRepository.createTokenOnChain(tokenDetails);
  }

  async getTokenFromBlockchain(tokenAddress: string, tokenId: string) {
    if (!tokenAddress || !tokenId) {
      throw new Error('Token address and ID are required');
    }
    return this.tokenRepository.getTokenOnChain(tokenAddress, tokenId);
  }
}

export default TokenUseCase;
