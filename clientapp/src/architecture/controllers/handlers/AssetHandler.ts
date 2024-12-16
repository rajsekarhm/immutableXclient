import AssetUseCase from "../../applications/usecases/AssetUseCase";
import AssetEntity from "../../domains/entities/AssetEntity";
import AssetModal from "../../domains/modals/AssetModal";
import IHandler from "./interface/IHandler";

class AssetHandler implements IHandler {
  constructor(private usecase: AssetUseCase) {}

  create(request: AssetModal) {
    this.usecase.createAsset(request);
  }

  updateById(id: string | number) {
    this.usecase.updateAssetByUniqueId(id);
  }

  getById(id: string | number) {
    return this.usecase.getAssetByUniqueId(id);
  }
}



export default AssetHandler