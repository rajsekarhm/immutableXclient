import exp from "constants";
import AssetEntity from "./AssetEntity";
import CustodianEntity from "./CustodianEntity";
import IFactory from "./Interface/IFactory";
import IEntities from "./Interface/IEntitties";
import TokenEntity from "./TokenEntity";
import UserEntity from "./UserEntity";


 class EntityFactory implements IFactory { 
    getEntity(entityType:string,entity:any) : IEntities {
        switch(entityType){
            case "user" :{
                return  new UserEntity(entity);
            }
            case "agent" :{
                return new CustodianEntity(entity)
            }
            case "asset" :{
                return new AssetEntity(entity)
            }
            case "token" :{
                return new TokenEntity(entity);
            }
            default :{
                return {}
            }
        }    
    }
}

export default EntityFactory;