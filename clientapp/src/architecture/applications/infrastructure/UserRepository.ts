import { requestAPI } from "../../../requests/core/request";
import server_config from "../../../../server.config";
import REQUEST_API from "../../../requests/api.config";
import IUserRepository from "../../domains/repository/IUserRepository";
import UserEntity from "../../domains/entities/UserEntity";
import UserModal from "architecture/domains/modals/UserModal";
class UserRepository implements IUserRepository {
  entities!: UserEntity;
  async createUser(userDetails: UserEntity,errorHandler:any): Promise<UserModal | any> {
    const {rejectWithValue} = errorHandler
    try{
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify(userDetails);
        return await requestAPI(`${server_config.host}:${server_config.port}/${REQUEST_API.CREATE_USER}`,"POST",raw,myHeaders);
    }catch(error){
        return rejectWithValue(error);
    }
  }
  async getUserById(id: number | string,errorHandler:any): Promise<any> {
    const {rejectWithValue} = errorHandler
    try {
        const response = await requestAPI(
          `${server_config.host}:${server_config.port}/${REQUEST_API.GET_USER}?governmentId=${id}`,
          "GET"
        );
        return response;
      } catch (error) {
        return rejectWithValue(error);
      }
  }
  async addAssetToUser(assetAddIds: any,errorHandler:any):Promise<any> {
    const {rejectWithValue} = errorHandler
    const {assetId,userId}  = assetAddIds
    try {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
  
        var raw = JSON.stringify({
          assetId: assetId,
        });
  
        var requestOptions: any = {
          method: "PUT",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };
  
        const result = await fetch(`http://127.0.0.1:8080/api/v1/user/addAsset?governmentId=${userId}`,
          requestOptions
        )
          .then((response) => response)
          .then((result) => result.json())
          .catch((error) => rejectWithValue(error));
        return result;
      } catch (error) {
        return rejectWithValue(error);
      }
  }
  async addTokenToUser(addTokenDetails: any ,errorHandler:any ):Promise<any> {
    const {rejectWithValue} = errorHandler
    const {userId,tokenId} = addTokenDetails
    try {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
  
        var raw = JSON.stringify({
          tokenId: tokenId,
        });
  
        var requestOptions: any = {
          method: "PUT",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };
  
        return await fetch(`http://127.0.0.1:8080/api/v1/user/addToken?governmentId=${userId}`,requestOptions)
          .then((response) => response)
          .then((result) => result.json())
          .catch((error) => console.log("error", error));
      } catch (error) {
        return rejectWithValue(error);
      }
  }

  async removeAssetUser(removeAssetIds: any ,errorHandler:any):Promise<any> {
    const {userId,assetId} = removeAssetIds
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "assetId": assetId
});

var requestOptions:any = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

return await fetch(`http://127.0.0.1:8080/api/v1/user/removeAsset?governmentId=${userId}`, requestOptions)
  .then(response => response)
  .then(result => result.json())
  .catch(error => console.log('error', error));
  }
}

export default  new UserRepository();
