
import IUserRepository from "../../domains/repository/IUserRepository";
import UserEntity from "../../domains/entities/UserEntity";
import UserModal from "architecture/domains/modals/UserModal";
import requestAPI from "../../../requests/core/request";
import BASE_ENDPOINT_V1 from "../../../../server.config";
import REQUEST_API from "../../../requests/api.config";

class UserRepository implements IUserRepository {
  entities!: UserEntity;

  async createUser(
    userDetails: UserEntity,
    errorHandler: any
  ): Promise<UserModal | any> {
    const { rejectWithValue } = errorHandler;
    try {
      return await requestAPI(`${BASE_ENDPOINT_V1}${REQUEST_API.USER.CREATE_USER}`, 'POST', userDetails, 'application/json');
    } catch (error) {
      return rejectWithValue(error);
    }
  }

  async getUserById(id: number | string, errorHandler: any): Promise<any> {
    const { rejectWithValue } = errorHandler;
    try {
      return await requestAPI(`${BASE_ENDPOINT_V1}${REQUEST_API.USER.GET_USER}?governmentId=${id}`, 'GET', {}, 'application/json');
    } catch (error) {
      return rejectWithValue(error);
    }
  }
  async addAssetToUser(Ids: any, errorHandler: any): Promise<any> {
    const { rejectWithValue } = errorHandler;
    const { assetId, userId } = Ids;
    try {
      return await requestAPI(`${BASE_ENDPOINT_V1}${REQUEST_API.ASSET.ADD_ASSET}?governmentId=${userId}`, 'PUT', { assetId }, 'application/json');
    } catch (error) {
      return rejectWithValue(error);
    }
  }
  async addTokenToUser(addTokenDetails: any, errorHandler: any): Promise<any> {
    const { rejectWithValue } = errorHandler;
    const { userId, tokenId } = addTokenDetails;
    try {
      // makeRequest(`${API_BASE_URL}/user/addToken?governmentId=6382`, 'PUT', { tokenId: "69" }, "application/json");
      return await requestAPI(`${BASE_ENDPOINT_V1}${REQUEST_API.USER.ADD_TOKEN}?government=${userId}`, 'PUT', { tokenId }, 'application/json');
    } catch (error) {
      return rejectWithValue(error);
    }
  }

  async removeAssetUser(removeAssetIds: any, errorHandler: any): Promise<any> {
    try {
      //  makeRequest(`${API_BASE_URL}/user/removeAsset?governmentId=6382`, 'PUT', { assetId: "110" }, "application/json");
      return await requestAPI(`${BASE_ENDPOINT_V1}${REQUEST_API.ASSET.REMOVE_ASSET}?governmentId=${removeAssetIds.userId}`, 'PUT', { assetId: removeAssetIds.assetId }, 'application/json');
    } catch (error) {
      return;
    }
  }

async changeAssociateUser(userId: any, errorHandler: any): Promise<any> {
  try{
    //  makeRequest(`${API_BASE_URL}/asset/changeAssociateUser?assetId=17710`, 'PUT', { userId: "9090" },"application/json");
    return await requestAPI(`${BASE_ENDPOINT_V1}${REQUEST_API.ASSET.CHANGE_ASSOCIATE_USER}?assetId=${userId.assetId}`, 'PUT', { userId: userId.userId }, 'application/json');
  }catch(err){

  }
}

}

export default new UserRepository();
