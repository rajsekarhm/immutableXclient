import  AssetModal  from "./AssetModal";

export default interface UserModal {
    securityId: string |undefined;
    firstname: string | undefined;
    lastname: string | undefined;
    email: string | undefined;
    phoneNumber: number | null;
    password: string | null;
    location: string | null;
    governmentId: number | boolean;
    edition: string;
    isAgent: boolean;
    AgentId: number | boolean;
    isAuthForBuyAndSell: string;
    assetHolding ?: AssetModal | []
  }