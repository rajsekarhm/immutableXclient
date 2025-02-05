import exp from "constants";
import AssetEntity from "./AssetEntity";
import CustodianEntity from "./CustodianEntity";
import IFactory from "./IFactory";
import IEntities from "./Interface/IEntitties";
import TokenEntity from "./TokenEntity";
import UserEntity from "./UserEntity";


 class EntityFactory implements IFactory { 
    getEntity(entityType:string) : IEntities {
        switch(entityType){
            case "user" :{
                return  new UserEntity();
            }
            case "agent" :{
                return new CustodianEntity()
            }
            case "asset" :{
                return new AssetEntity()
            }
            case "token" :{
                return new TokenEntity();
            }
            default :{
                return {}
            }
        }    
    }
}

export default EntityFactory;