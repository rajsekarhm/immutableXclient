/**
 * IUserUseCase — contract for user business logic.
 */
export default interface IUserUseCase {
  createUser(userDetails: any): Promise<any>;
  getUser(id: string): Promise<any>;
  authUser(credentials: { username: string; password: string; securityId: string }): Promise<any>;
  addAssetToUser(assetId: string, userId: string): Promise<any>;
  addTokenToUser(tokenId: string, userId: string): Promise<any>;
  removeAssetFromUser(assetId: string, userId: string): Promise<any>;
  changeAssociateUser(assetId: string, userId: string): Promise<any>;
}
