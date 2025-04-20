import ContractETH from "../../contract/ContractETH";
import CONTRACT_ADDRESS_TESTNET from "../../contract/Contract";
import asset_abi from "../../../../blockchain_client/ethereum/abi/asset_abi";
import IAssetRepository from "architecture/domains/repository/IAssetRepository";
import AssetEntity from "../../domains/entities/AssetEntity";
import AssetModal from "../../domains/modals/AssetModal";
import user from "./UserRepository";
import requestAPI from "../../../requests/core/request";
import BASE_ENDPOINT_V1 from "../../../../server.config";
// Define interfaces for better type safety
interface AssetTransferOptions {
  symbol: string;
  assetAddress: string;
  value: number;
  assetId: string;
  assetURI: string;
  toAddress: string;
}

interface ChainAssetResponse {
  tokenId: string;
  value: string;
  tokenURI: string;
  isFungible: boolean;
  symbol: string;
  walletAddress: string;
}

class AssetRepository implements IAssetRepository {
  private contractManager: ContractETH;

  constructor() {
    this.contractManager = new ContractETH("browser", window.ethereum);
  }

  /**
   * Transfer ownership of an asset on the blockchain and update user associations
   * @param asset Asset transfer details
   * @param newAddress New owner's wallet address
   * @param receiverId Receiver's user ID
   * @param errorHandler Error handling mechanism
   */
  async transferOwnership(
    asset: AssetTransferOptions,
    newAddress: string,
    receiverId: string,
    errorHandler: { rejectWithValue: (error: any) => any }
  ): Promise<any> {
    try {
      // Interact with blockchain contract
      const contractInstance = await this.getContractInstance();
      await contractInstance.safeTransferOwnerShipX(
        asset.assetAddress,
        newAddress,
        asset.assetId,
        asset.assetURI,
        asset.value,
        newAddress
      );

      // Dispatch user-related actions
      await this.updateUserAssetAssociations(
        asset.assetId,
        receiverId,
        errorHandler
      );

      // Change asset's associated user
      await user.changeAssociateUser({ assetId: asset.assetId, userId: receiverId },errorHandler);
    } catch (error) {
      return errorHandler.rejectWithValue(error);
    }
  }

  /**
   * Update user asset associations
   * @param assetId Asset identifier
   * @param userId User identifier
   * @param errorHandler Error handling mechanism
   */
  private async updateUserAssetAssociations(
    assetId: string,
    userId: string,
    errorHandler: { rejectWithValue: (error: any) => any }
  ): Promise<void> {
    try {
      // Dispatch actions to add and remove asset from user
      await user.addAssetToUser({ assetId, userId }, errorHandler);
      await user.removeAssetUser({ assetId, userId }, errorHandler);
    } catch (error) {
      throw error;
    }
  }

  /**
   * Create a new asset
   * @param asset Asset details
   * @param errorHandler Error handling mechanism
   */
  async createAsset(asset: AssetEntity, errorHandler?: any): Promise<any> {
    try {
      return await requestAPI(`${BASE_ENDPOINT_V1}/asset/createAsset`, "POST", asset, "application/json");
    } catch (error) {
      console.error("Asset creation error:", error);
      return errorHandler?.rejectWithValue?.(error);
    }
  }

  /**
   * Retrieve assets by their IDs
   * @param ids Array of asset identifiers
   * @param errorHandler Error handling mechanism
   */
  async getAssetById(id: string[], errorHandler: any): Promise<any> {
    try {
      if (id == undefined) {
        return [];
      }
      //  await makeRequest(`${API_BASE_URL}/asset/getAsset?assetId=120`,"GET",{}, "application/json");
      return await requestAPI(`${BASE_ENDPOINT_V1}/asset/getAsset?assetId=${id}`, "GET", {}, "application/json");
    } catch (error) {
      console.error("Get asset by ID error:", error);
      return errorHandler?.rejectWithValue?.(error);
    }
  }

  /**
   * Create an asset on the blockchain
   * @param asset Asset details
   * @param errorHandler Error handling mechanism
   */
  async createAssetOnChain(
    asset: AssetModal | AssetEntity | any,
    errorHandler: any
  ): Promise<any> {
    try {
      const contractInstance = await this.getContractInstance();
      const { symbol, assetAddress, assetId, assetURI, value } = asset;

      return await contractInstance.safeMintX(
        assetAddress,
        value,
        assetId,
        assetURI,
        symbol
      );
    } catch (error) {
      console.error("On-chain asset creation error:", error);
      return errorHandler?.rejectWithValue?.(error);
    }
  }

  /**
   * Retrieve asset details from the blockchain
   * @param asset Asset identification details
   * @param errorHandler Error handling mechanism
   */
  async getAssetOnChain(
    asset: { asserAddress: string; assetId: string },
    errorHandler?: any
  ): Promise<ChainAssetResponse> {
    try {
      const contractInstance = await this.getContractInstance();
      const sourceObject = await contractInstance.getHoldingAssetX(
        asset.asserAddress,
        asset.assetId
      );

      return {
        tokenId: sourceObject[0].toString(),
        value: sourceObject[1].toString(),
        tokenURI: sourceObject[2],
        isFungible: sourceObject[3],
        symbol: sourceObject[4],
        walletAddress: asset.asserAddress,
      };
    } catch (error) {
      console.error("On-chain asset retrieval error:", error);
      return errorHandler?.rejectWithValue?.(error);
    }
  }

  /**
   * Get contract instance for blockchain interactions
   */
  private async getContractInstance(): Promise<any> {
    return await this.contractManager.interactWithContract(CONTRACT_ADDRESS_TESTNET,asset_abi);
  }
}

export default new AssetRepository();
