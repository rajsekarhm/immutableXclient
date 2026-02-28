/**
 * IAssetRepository — contract for asset data access.
 * Implementations handle Redux store dispatch + API + blockchain calls.
 */
export default interface IAssetRepository {
  getAssetState(): any;
  createAsset(assetDetails: any): Promise<any>;
  getAssetById(ids: string[]): Promise<any>;
  createAssetOnChain(asset: any): Promise<any>;
  getAssetOnChain(assetAddress: string, assetId: string): Promise<any>;
  transferOwnershipOnChain(asset: any, newAddress: string): Promise<any>;
}
