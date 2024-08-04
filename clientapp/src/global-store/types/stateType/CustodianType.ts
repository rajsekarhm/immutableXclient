import { userContract, userContractType } from "./UserType"

export interface custodianContractType extends userContractType {
    orgId:string | any,
    securityId:string | any,
    Authenticated:string | any,
    AuthorizationFor:string | any
}

export const custodianContract : custodianContractType = {
    ...userContract,
    orgId:null,
    securityId:null,
    Authenticated:null,
    AuthorizationFor:null
}