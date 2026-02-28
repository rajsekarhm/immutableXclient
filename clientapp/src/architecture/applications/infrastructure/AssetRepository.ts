import { Store } from 'redux';
import IAssetRepository from '../../domains/repository/IAssetRepository';
import { setAssetLoading, setAssetData, setAssetError } from '../../adapters/actions/AssetActions';
import ContractETH from '../../contract/ContractETH';
import CONTRACT_ADDRESS_TESTNET from '../../contract/Contract';
import asset_abi from '../../../../blockchain_client/ethereum/abi/asset_abi';
import requestAPI from '../../../requests/core/request';
import BASE_ENDPOINT_V1 from '../../../../server.config';

class AssetRepository implements IAssetRepository {
  private contractManager: ContractETH;

  constructor(private store: Store) {
    // this.contractManager = new ContractETH('browser', window.ethereum); // handle this issue 
  }

  getAssetState() {
    return this.store.getState().asset;
  }

  async createAsset(assetDetails: any) {
    this.store.dispatch(setAssetLoading());
    try {
      const result = await requestAPI(
        `${BASE_ENDPOINT_V1}/asset/createAsset`, 'POST', assetDetails, 'application/json'
      );
      this.store.dispatch(setAssetData(result.data));
      return result;
    } catch (error: any) {
      this.store.dispatch(setAssetError(error.message || 'Failed to create asset'));
      throw error;
    }
  }

  async getAssetById(ids: string[]) {
    this.store.dispatch(setAssetLoading());
    try {
      if (!ids || ids.length === 0) {
        this.store.dispatch(setAssetData([]));
        return [];
      }
      const result = await requestAPI(
        `${BASE_ENDPOINT_V1}/asset/getAsset?assetId=${ids}`, 'GET', {}, 'application/json'
      );
      this.store.dispatch(setAssetData(result.data));
      return result;
    } catch (error: any) {
      this.store.dispatch(setAssetError(error.message || 'Failed to get asset'));
      throw error;
    }
  }

  async createAssetOnChain(asset: any) {
    this.store.dispatch(setAssetLoading());
    try {
      const contractInstance = await this.getContractInstance();
      const { symbol, assetAddress, assetId, assetURI, value } = asset;
      const txResponse = await contractInstance.safeMintX(
        assetAddress, value, assetId, assetURI, symbol
      );
      this.store.dispatch(setAssetData({ hash: txResponse.hash }));
      return txResponse;
    } catch (error: any) {
      this.store.dispatch(setAssetError(error.message || 'Failed to create asset on chain'));
      throw error;
    }
  }

  async getAssetOnChain(assetAddress: string, assetId: string) {
    this.store.dispatch(setAssetLoading());
    try {
      const contractInstance = await this.getContractInstance();
      const sourceObject = await contractInstance.getHoldingAssetX(assetAddress, assetId);
      const result = {
        tokenId: sourceObject[0].toString(),
        value: sourceObject[1].toString(),
        tokenURI: sourceObject[2],
        isFungible: sourceObject[3],
        symbol: sourceObject[4],
        walletAddress: assetAddress,
      };
      this.store.dispatch(setAssetData(result));
      return result;
    } catch (error: any) {
      this.store.dispatch(setAssetError(error.message || 'Failed to get asset from chain'));
      throw error;
    }
  }

  async transferOwnershipOnChain(asset: any, newAddress: string) {
    this.store.dispatch(setAssetLoading());
    try {
      const contractInstance = await this.getContractInstance();
      await contractInstance.safeTransferOwnerShipX(
        asset.assetAddress, newAddress, asset.assetId,
        asset.assetURI, asset.value, newAddress
      );
      this.store.dispatch(setAssetData({ transferred: true, assetId: asset.assetId }));
    } catch (error: any) {
      this.store.dispatch(setAssetError(error.message || 'Failed to transfer ownership'));
      throw error;
    }
  }

  private async getContractInstance(): Promise<any> {
    return await this.contractManager.interactWithContract(
      CONTRACT_ADDRESS_TESTNET, asset_abi
    );
  }
}

export default AssetRepository;
