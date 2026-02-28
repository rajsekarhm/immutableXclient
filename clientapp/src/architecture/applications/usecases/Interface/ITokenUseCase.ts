/**
 * ITokenUseCase — contract for token business logic.
 */
export default interface ITokenUseCase {
  createToken(tokenDetails: any): Promise<any>;
  getToken(tokenId: string): Promise<any>;
  createTokenOnBlockchain(tokenDetails: any): Promise<any>;
  getTokenFromBlockchain(tokenAddress: string, tokenId: string): Promise<any>;
}
