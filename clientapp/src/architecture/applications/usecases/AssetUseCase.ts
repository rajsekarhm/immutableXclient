import IAssetRepository from '../../domains/repository/IAssetRepository';
import IUserRepository from '../../domains/repository/IUserRepository';
import IAssetUseCase from './Interface/IAssetUseCase';

class AssetUseCase implements IAssetUseCase {
  constructor(
    private assetRepository: IAssetRepository,
    private userRepository: IUserRepository
  ) {}

  async createAsset(assetDetails: any) {
    if (!assetDetails.assetAddress) {
      throw new Error('Asset address is required');
    }
    return this.assetRepository.createAsset(assetDetails);
  }

  async getAsset(assetIds: string[]) {
    return this.assetRepository.getAssetById(assetIds);
  }

  async createAssetOnBlockchain(assetDetails: any) {
    if (!assetDetails.assetAddress || !assetDetails.assetId) {
      throw new Error('Asset address and ID are required');
    }
    const txResponse = await this.assetRepository.createAssetOnChain(assetDetails);
    if (txResponse && txResponse.hash) {
      await this.assetRepository.createAsset(assetDetails);
      if (assetDetails.associatedUser) {
        await this.userRepository.addAssetToUser(
          assetDetails.assetId, assetDetails.associatedUser
        );
      }
    }
    return txResponse;
  }

  async getAssetFromBlockchain(assetAddress: string, assetId: string) {
    if (!assetAddress || !assetId) {
      throw new Error('Asset address and ID are required');
    }
    return this.assetRepository.getAssetOnChain(assetAddress, assetId);
  }

  async transferOwnership(asset: any, newAddress: string, receiverId: string) {
    if (!asset.assetId || !newAddress || !receiverId) {
      throw new Error('Asset details, new address, and receiver ID are required');
    }
    await this.assetRepository.transferOwnershipOnChain(asset, newAddress);
    await this.userRepository.addAssetToUser(asset.assetId, receiverId);
    await this.userRepository.removeAssetFromUser(asset.assetId, asset.associatedUser);
    await this.userRepository.changeAssociateUser(asset.assetId, receiverId);
  }
}

export default AssetUseCase;
