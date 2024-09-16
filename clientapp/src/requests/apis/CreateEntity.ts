import { requestAPI } from "../core/request";
import entities from "./interface/entities";
import { _response } from "./interface/entities"

class userEntity implements entities{
    createEntities(endPoint: string, body?: any, headers?: any):_response {
        return requestAPI(endPoint,body,headers)
    }
    getEntities(endPoint: string, body?: any, headers?: any):_response {
        return requestAPI(endPoint,body,headers)
    }
    updateEntities(endPoint: string, body?: any, headers?: any):_response {
        return requestAPI(endPoint,body,headers)
    }
    deleteEntities(endPoint: string, body?: any, headers?: any):_response {
        return requestAPI(endPoint,body,headers)
    }
    
}


export default userEntity;