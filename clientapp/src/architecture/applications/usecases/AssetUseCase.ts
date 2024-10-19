import AbstractUseCase from "./Interface/AbstractUseCase";
import IAssetRepository from "../../domains/repository/IAssetRepository";
import AssetEntity from '../../domains/entities/AssetEntity';
import { useDispatch } from "react-redux";

class AssetUseCase implements AbstractUseCase {
  constructor(private repository: IAssetRepository) {
  }
  execute(_function:any,...args:any) {
    const dispatch = useDispatch()
    dispatch(_function(args))
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
