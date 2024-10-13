import { AssetEntity } from "../../domains/Index";
import IAssetRepository from '../../domains/repository/IAssetRepository';

class AssetRepository implements IAssetRepository{
    createAsset(asset: AssetEntity): void {
        throw new Error("Method not implemented.");
    }
    findById(id: number | string): void {
        throw new Error("Method not implemented.");
    }
    
}


export default AssetRepository