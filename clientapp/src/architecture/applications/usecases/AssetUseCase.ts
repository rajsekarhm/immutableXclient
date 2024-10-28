import AbstractUseCase from "./Interface/AbstractUseCase";
import IAssetRepository from "../../domains/repository/IAssetRepository";
import AssetEntity from '../../domains/entities/AssetEntity';
import { useDispatch } from "react-redux";
import AssetModal from "../../domains/modals/AssetModal";

class AssetUseCase implements AbstractUseCase {
  constructor(private repository: IAssetRepository) {
  }
  execute(_function:any,...args:any) {
    const dispatch = useDispatch()
    dispatch(_function(args))
  }
  createAsset(entity: AssetModal) {
    this.repository.createAsset(new AssetEntity(entity.walletAddress,entity.isValidated,entity.assetType,entity.documentUrl,entity.status))
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
