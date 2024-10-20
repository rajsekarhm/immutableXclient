
import AssetEntity from '../../domains/entities/AssetEntity';
import IAssetRepository from '../../domains/repository/IAssetRepository';

class AssetRepository implements IAssetRepository{
    createAsset(asset: AssetEntity): void {
        console.log('repository called')
    }
    findById(id: number | string): void {
        console.log('repository called')
    }
    
}


export default AssetRepository