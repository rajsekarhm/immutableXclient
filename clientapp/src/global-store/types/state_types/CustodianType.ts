import { userContract, userContractType } from "./UserType";

export interface custodianContractType extends userContractType {
  orgId: string | undefined;
  securityId: string | undefined;
  Authenticated: string | undefined;
  AuthorizationFor: string | undefined;
}

export const custodianContract: custodianContractType = {
  ...userContract,
  orgId: undefined,
  securityId: undefined,
  Authenticated: undefined,
  AuthorizationFor: undefined,
};
