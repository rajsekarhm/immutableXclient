import  AssetModal  from "./AssetModal";

export default interface UserModal {
    securityId: string ;
    firstName: string ;
    lastName: string ;
    email: string ;
    phoneNumber: number ;
    password: string ;
    location: string ;
    governmentID: number ;
    edition: string;
    isAgent: boolean;
    AgentId: number ;
    isAuthForBuyAndSell: string;
    assetIds ?: AssetModal []  
    tokenIds?: any []
  }