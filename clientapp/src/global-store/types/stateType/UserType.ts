type requiredType = {
  email: boolean;
  firstname: boolean;
  password: boolean;
};

export interface userContractType {
  securityId: undefined;
  firstname: string | undefined;
  lastname: string | undefined;
  email: string | undefined;
  phoneNumber: number | null;
  password: string | null;
  location: string | null;
  governmentId: number | null;
  edition: string;
  required: requiredType;
  isAgent: boolean;
  AgentId: number | null;
  isAuthForBuyAndSell: string;
}

export const userContract: userContractType = {
  firstname: undefined,
  lastname: undefined,
  email: undefined,
  phoneNumber: null,
  password: null,
  location: null,
  governmentId: null,
  edition: "free",
  required: {
    email: false,
    firstname: false,
    password: false,
  },
  isAgent: false,
  AgentId: null,
  isAuthForBuyAndSell: "",
};
