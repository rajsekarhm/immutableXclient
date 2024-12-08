import { requestAPI } from "../../../requests/core/request";
import server_config from "../../../../server.config";
import REQUEST_API from "../../../requests/api.config";
import ContractETH from "../../contract/ContractETH";
import CONTRACT_ADDRESS_TESTNET from "../../contract/Contract";
import asset_abi from "../../../../blockchain_client/ethereum/abi/asset_abi";
import IAssetRepository from "architecture/domains/repository/IAssetRepository";
import AssetEntity from "../../domains/entities/AssetEntity";
import AssetModal from "../../domains/modals/AssetModal";
import user from './UserRepository'

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
      await this.changeAssetAssociateUser(
        { assetId: asset.assetId, userId: receiverId }, 
        errorHandler
      );

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
      await  user.removeAssetUser({ assetId, userId }, errorHandler);
    } catch (error) {
      throw error;
    }
  }

  /**
   * Change the user associated with an asset
   * @param params Asset and user details
   * @param errorHandler Error handling mechanism
   */
  async changeAssetAssociateUser(
    { assetId, userId }: { assetId: string; userId: string }, 
    errorHandler?: { rejectWithValue?: (error: any) => any }
  ): Promise<void> {
    try {
      const response = await fetch(
        `http://127.0.0.1:8080/api/v1/asset/changeAssociateUser?assetId=${assetId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId })
        }
      );

      if (!response.ok) {
        throw new Error('Failed to change asset user association');
      }
    } catch (error) {
      console.error("Asset user association error:", error);
      if (errorHandler?.rejectWithValue) {
        errorHandler.rejectWithValue(error);
      }
    }
  }

  /**
   * Create a new asset
   * @param asset Asset details
   * @param errorHandler Error handling mechanism
   */
  async createAsset(
    asset: AssetEntity, 
    errorHandler?: any
  ): Promise<any> {
    try {
      const response = await fetch(
        "http://127.0.0.1:8080/api/v1/asset/createAsset",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(asset)
        }
      );

      if (!response.ok) {
        throw new Error('Asset creation failed');
      }

      return await response.json();
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
  async getAssetById(
    ids: string[], 
    errorHandler: any
  ): Promise<any[]> {
    try {
      const getAssetResponses = await Promise.all(
        ids.map(id => 
          requestAPI(
            `${server_config.host}:${server_config.port}/${REQUEST_API.GET_ASSET}?assetId=${id}`,
            "GET"
          )
        )
      );
      return getAssetResponses;
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
    return await this.contractManager.interactWithContract(
      CONTRACT_ADDRESS_TESTNET,
      asset_abi
    );
  }
}

export default new AssetRepository();