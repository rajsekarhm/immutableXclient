/**
 * IAssetUseCase — contract for asset business logic.
 */
export default interface IAssetUseCase {
  createAsset(assetDetails: any): Promise<any>;
  getAsset(assetIds: string[]): Promise<any>;
  createAssetOnBlockchain(assetDetails: any): Promise<any>;
  getAssetFromBlockchain(assetAddress: string, assetId: string): Promise<any>;
  transferOwnership(asset: any, newAddress: string, receiverId: string): Promise<void>;
}
