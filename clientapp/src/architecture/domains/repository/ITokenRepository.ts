/**
 * ITokenRepository — contract for token data access.
 * Implementations handle Redux store dispatch + API + blockchain calls.
 */
export default interface ITokenRepository {
  getTokenState(): any;
  createToken(tokenDetails: any): Promise<any>;
  getTokenById(id: string): Promise<any>;
  createTokenOnChain(tokenDetails: any): Promise<any>;
  getTokenOnChain(tokenAddress: string, tokenId: string): Promise<any>;
}
