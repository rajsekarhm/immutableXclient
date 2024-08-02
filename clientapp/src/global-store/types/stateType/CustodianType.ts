import { userContract } from "./UserType"

export const custodianContract = {
    ...userContract,
    orgId:null,
    securityId:null,
    Authenticated:null,
    AuthorizationFor:null
}