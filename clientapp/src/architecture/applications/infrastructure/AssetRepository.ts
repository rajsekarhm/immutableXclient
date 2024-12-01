import { requestAPI } from "../../../requests/core/request";
import server_config from "../../../../server.config";
import REQUEST_API from "../../../requests/api.config";
import ContractETH from "../../contract/ContractETH";
import CONTRACT_ADDRESS_TESTNET from "../../contract/Contract";
import asset_abi from "../../../../blockchain_client/ethereum/abi/asset_abi";
import IAssetRepository from "architecture/domains/repository/IAssetRepository";
import AssetEntity from "../../domains/entities/AssetEntity";
import AssetModal from "../../domains/modals/AssetModal";

class AssetRepository implements IAssetRepository {
  async transferOwnerShip(asset: any, erorHandler?: any): Promise<any> {
    const { symbol, assetAddress, value, assetId, assetURI, toAddress } = asset
    const _contract = new ContractETH("browser", window.ethereum);
    const web = await _contract.interactWithContract(CONTRACT_ADDRESS_TESTNET,asset_abi);
    // safeTransferFrom( from,  to,  tokenId,  value, abi.encode(info)); 
    await web.safeTransferFrom(assetAddress,toAddress,assetId,assetURI,value,symbol)
  }
  async createAsset(asset: AssetEntity, errorHandler: any): Promise<void> {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify(asset);
    const response: any = await fetch(
      "http://127.0.0.1:8080/api/v1/asset/createAsset",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(asset),
      }
    );
    return JSON.parse(response);
  }

  async getAssetById(ids: any, errorHandler: any): Promise<any> {
    const getAssetReponse = await Promise.all(
      ids.map((id: any) =>
        requestAPI(
          `${server_config.host}:${server_config.port}/${REQUEST_API.GET_ASSET}?assetId=${id}`,
          "GET"
        )
      )
    );
    return getAssetReponse;
  }

  async createAssetOnChain(
    asset: AssetModal | AssetEntity | any,
    errorHandler: any
  ): Promise<any> {
    const { symbol, assetAddress, assetId, assetURI, value } = asset;
    const _contract = new ContractETH("browser", window.ethereum);
    const web = await _contract.interactWithContract(CONTRACT_ADDRESS_TESTNET,asset_abi);
    const sourceObject = await web.safeMintX(
      assetAddress,
      value,
      assetId,
      assetURI,
      symbol
    );
    return sourceObject;
  }

  async getAssetOnChain(asset: any, errorHandler?: any): Promise<any> {
    const { asserAddress, assetId } = asset;
    const _contract = new ContractETH("browser", window.ethereum);
    const web = await _contract.interactWithContract(CONTRACT_ADDRESS_TESTNET,asset_abi);
    const sourceObject = await web.getHoldingAssetX(asserAddress, assetId);
    return Object.assign(
      {},
      {
        tokenId: sourceObject[0].toString(),
        value: sourceObject[1].toString(),
        tokenURI: sourceObject[2],
        isFungible: sourceObject[3],
        symbol: sourceObject[4],
        walletAddress: asserAddress,
      }
    );
  }
}

export default new AssetRepository();
