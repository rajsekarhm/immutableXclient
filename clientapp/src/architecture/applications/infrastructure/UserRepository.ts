
import IUserRepository from "../../domains/repository/IUserRepository";
import UserEntity from "../../domains/entities/UserEntity";
import UserModal from "architecture/domains/modals/UserModal";
import requestAPI from "../../../requests/core/request";
import BASE_ENDPOINT_V1 from "../../../../server.config";
import REQUEST_API from "../../../requests/api.config";

class UserRepository implements IUserRepository {
  entities: UserEntity;

  constructor(){
    this.entities =  new UserEntity(UserEntity.defaultUser)
  }

   createUser(
    userDetails: UserEntity,
    errorHandler: any
  ): Promise<UserModal | any> {
    const { rejectWithValue } = errorHandler;
    try {
      return  requestAPI(`${BASE_ENDPOINT_V1}${REQUEST_API.USER.CREATE_USER}`, 'POST', userDetails, 'application/json');
    } catch (error) {
      return rejectWithValue(error);
    }
  }

  getUserById(id: number | string, errorHandler: any): Promise<any> {
    const { rejectWithValue } = errorHandler;
    try {
      return  requestAPI(`${BASE_ENDPOINT_V1}${REQUEST_API.USER.GET_USER}?securityId=${id}`, 'GET', {}, 'application/json');
    } catch (error) {
      
      return rejectWithValue(error);
    }
  }

   addAssetToUser(Ids: any, errorHandler: any): Promise<any> {
    const { rejectWithValue } = errorHandler;
    const { assetId, userId } = Ids;
    try {
      return  requestAPI(`${BASE_ENDPOINT_V1}${REQUEST_API.ASSET.ADD_ASSET}${userId}`, 'PUT', { assetId }, 'application/json');
    } catch (error) {
      return rejectWithValue(error);
    }
  }

   addTokenToUser(addTokenDetails: any, errorHandler: any): Promise<any> {
    const { rejectWithValue } = errorHandler;
    const { userId, tokenId } = addTokenDetails;
    try {
      // makeRequest(`${API_BASE_URL}/user/addToken?securityId=6382`, 'PUT', { tokenId: "69" }, "application/json");
      return  requestAPI(`${BASE_ENDPOINT_V1}${REQUEST_API.USER.ADD_TOKEN}${userId}`, 'PUT', { tokenId }, 'application/json');
    } catch (error) {
      return rejectWithValue(error);
    }
  }


   removeAssetUser(removeAssetIds: any, errorHandler: any): Promise<any> {
    const { rejectWithValue } = errorHandler;
    try {
      
      //  makeRequest(`${API_BASE_URL}/user/removeAsset?securityId=6382`, 'PUT', { assetId: "110" }, "application/json");
      return  requestAPI(`${BASE_ENDPOINT_V1}${REQUEST_API.ASSET.REMOVE_ASSET}${removeAssetIds.userId}`, 'PUT', { assetId: removeAssetIds.assetId }, 'application/json');
    } catch (error) {
      return rejectWithValue(error);;
    }
  }

 changeAssociateUser(userId: any, errorHandler: any): Promise<any> {
  const { rejectWithValue } = errorHandler;
  try{
    //  makeRequest(`${API_BASE_URL}/asset/changeAssociateUser?assetId=17710`, 'PUT', { userId: "9090" },"application/json");
    return  requestAPI(`${BASE_ENDPOINT_V1}${REQUEST_API.ASSET.CHANGE_ASSOCIATE_USER}${userId.assetId}`, 'PUT', { userId: userId.userId }, 'application/json');
  }catch(error){
    return rejectWithValue(error);
  }
}

 authUser({username, password, securityId}:any,errorHandler:any): Promise<any> {
    const { rejectWithValue } = errorHandler;
  try{
    return  requestAPI(`${BASE_ENDPOINT_V1}${REQUEST_API.USER.AUTH_USER}`, 'PUT', { 
      username,
      password,
      securityId
     }, 'application/json');

  }catch(error){
    return rejectWithValue(error);
  }
 }

}

export default new UserRepository();
