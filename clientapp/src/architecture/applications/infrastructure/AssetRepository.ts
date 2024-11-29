import REQUEST_API from "../../../requests/api.config";
import AssetEntity from "../../domains/entities/AssetEntity";
import IAssetRepository from "../../domains/repository/IAssetRepository";
import server_config from '../../../../server.config';
import { requestAPI } from "../../../requests/core/request";

class AssetRepository implements IAssetRepository {
  async createAsset(asset: AssetEntity): Promise<void> {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify(asset.assetEntity);
    await requestAPI(`${server_config.host}:${server_config.port}/${REQUEST_API.CREATE_ASSET}`,'POST',raw,myHeaders);
    console.log("repository called");
  }
  async findById(id: number | string): Promise<void> {
    await requestAPI(`${server_config.host}:${server_config.port}/${REQUEST_API.GET_ASSET}`,'GET')
    console.log("repository called");
  }
}

export default AssetRepository;
