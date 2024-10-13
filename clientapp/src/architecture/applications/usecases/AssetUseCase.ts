import AbstractUseCase from "./Interface/AbstractUseCase";
import IAssetRepository from "../../domains/repository/IAssetRepository";
import AssetEntity from '../../domains/entities/AssetEntity';

class AssetUseCase extends AbstractUseCase {
  constructor(private repository: IAssetRepository) {
    super();
  }
  createAsset(entity: AssetEntity) {
    this.repository.createAsset(entity)
  }
  getAssetByUniqueId(id: string | number): AssetEntity {
    this.repository.findById(id);
    return new AssetEntity("", true, "", "", "");
  }
  updateAssetByUniqueId(id: string | number): AssetEntity {
    return new AssetEntity("", true, "", "", "");
  }
}

export default AssetUseCase;
