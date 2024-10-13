
import AssetEntity from '../entities/AssetEntity';

interface IAssetRepository { 
    createAsset(asset:AssetEntity):void
    findById(id:number| string):void
}

export default IAssetRepository