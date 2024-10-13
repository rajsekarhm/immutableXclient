import  AssetModal  from "./AssetModal";

export default interface UserModal {
    securityId: string ;
    firstname: string ;
    lastname: string ;
    email: string ;
    phoneNumber: number ;
    password: string ;
    location: string ;
    governmentId: number ;
    edition: string;
    isAgent: boolean;
    AgentId: number ;
    isAuthForBuyAndSell: string;
    assetHolding ?: AssetModal 
  }