import AbstractUseCase from "./Interface/AbstractUseCase";
import IAssetRepository from "../../domains/repository/IAssetRepository";
import AssetEntity from "../../domains/entities/AssetEntity";
import { useDispatch } from "react-redux";
import AssetModal from "../../domains/modals/AssetModal";

class AssetUseCase implements AbstractUseCase {
  constructor(private repository: IAssetRepository) {}
  execute(_function: any) {
    throw new Error("Method not implemented.");
  }
}

export default AssetUseCase;
