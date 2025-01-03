import AssetEntity from "../entities/AssetEntity";
import AssetModal from "../modals/AssetModal";

interface IAssetRepository {
  createAsset(asset: AssetModal | AssetEntity,errorHandler?:any): any;
  getAssetById(id: any,errorHandler?:any): any;
  createAssetOnChain(asset: AssetModal | AssetEntity,errorHandler?:any): any;
  getAssetOnChain(assetId: any,errorHandler?:any): any;
  transferOwnership(asset:any,newAddress:string,receiverId:string,erorHandler?:any):any
}

export default IAssetRepository;
