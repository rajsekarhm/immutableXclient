import IController from './interface/Handler';
import IAssetUseCase from '../../applications/usecases/Interface/IAssetUseCase';

class AssetController implements IController {
  constructor(private assetUseCase: IAssetUseCase) {}

  execute(command: string, payload?: any) {
    switch (command) {
      case 'createAsset':
        return this.assetUseCase.createAsset(payload);
      case 'getAsset':
        return this.assetUseCase.getAsset(payload);
      case 'createAssetBlockchain':
        return this.assetUseCase.createAssetOnBlockchain(payload);
      case 'getAssetBlockchain':
        return this.assetUseCase.getAssetFromBlockchain(payload.assetAddress, payload.assetId);
      case 'transferOwnership':
        return this.assetUseCase.transferOwnership(payload.asset, payload.newAddress, payload.receiverId);
      default:
        throw new Error(`Unknown asset command: ${command}`);
    }
  }
}

export default AssetController;