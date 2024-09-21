import { AssetDetailsType } from './AssestDetailsType';

type requiredType = {
  email: boolean;
  firstname: boolean;
  password: boolean;
};

export interface userContractType {
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
  assetHolding ?:AssetDetailsType | []
}


export const userContract: userContractType = {
  firstname: undefined,
  lastname: undefined,
  email: undefined,
  phoneNumber: null,
  password: null,
  location: null,
  governmentId: false,
  edition: "free",
  isAgent: false,
  AgentId: false,
  isAuthForBuyAndSell: "",
  securityId: undefined,
  assetHolding:[]
};
