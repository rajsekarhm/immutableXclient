import AssetModal from "../modals/AssetModal";
import UserModal from "../modals/UserModal";
import IEntities from "./Interface/IEntitties";

class UserEntity implements IEntities{
    User: UserModal;
    constructor(securityId: string |undefined,
        firstname: string | undefined,
        lastname: string | undefined,
        email: string | undefined,
        phoneNumber: number | null,
        password: string | null,
        location: string | null,
        governmentId: number | boolean,
        edition: string,
        isAgent: boolean,
        AgentId: number | boolean,
        isAuthForBuyAndSell: string,
        assetHolding ?: AssetModal ){
            this.User =  {
                firstname:firstname,
                lastname:lastname,
                email:email,
                phoneNumber:phoneNumber,
                password:password,
                location:location,
                governmentId:governmentId,
                edition:edition,
                isAgent:isAgent,
                AgentId:AgentId,
                isAuthForBuyAndSell:isAuthForBuyAndSell,
                assetHolding:assetHolding,
                securityId:securityId
            }
    }
}