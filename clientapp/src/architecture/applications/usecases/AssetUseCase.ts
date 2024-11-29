import AbstractUseCase from "./interface/AbstractUseCase";
import IAssetRepository from "../../domains/repository/IAssetRepository";
import AssetEntity from "../../domains/entities/AssetEntity";
import { useDispatch } from "react-redux";
import AssetModal from "../../domains/modals/AssetModal";

class AssetUseCase implements AbstractUseCase {
  constructor(private repository: IAssetRepository) {}
  execute(_function: any, ...args: any) {
    const dispatch = useDispatch();
    dispatch(_function(args));
  }
  createAsset(entity: AssetModal) {
    this.repository.createAsset(
      new AssetEntity(
        entity.symbol,
        entity.assetAddress,
        entity.isValidated,
        entity.tokenId,
        entity.tokenURI,
        entity.value,
        entity.isForSale
      )
    );
  }
  getAssetByUniqueId(id: string | number): AssetEntity {
    this.repository.findById(id);
    return new AssetEntity("", "", false, "", "", 0, false);
  }
  updateAssetByUniqueId(id: string | number): AssetEntity {
    return new AssetEntity("", "", false, "", "", 0, false);
  }
}

export default AssetUseCase;
