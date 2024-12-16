import CustodianModal from '../modals/CustodianModal';

class CustodianEntity {
  Custodian: CustodianModal;
  static defaultCustodian: any;
  constructor(
    securityId: string,
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: number,
    password: string,
    location: string,
    governmentID: number,
    edition: string,
    isAgent: boolean,
    AgentId: number,
    isAuthForBuyAndSell: string,
    orgId: string,
    Authenticated: string,
    AuthorizationFor: string,
    tokenIds:any[],
    assetIds:any[]
  ) {
    this.Custodian = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      password: password,
      location: location,
      governmentID: governmentID,
      edition: edition,
      isAgent: isAgent,
      AgentId: AgentId,
      isAuthForBuyAndSell: isAuthForBuyAndSell,
      securityId: securityId,
      orgId: orgId,
      Authenticated: Authenticated,
      AuthorizationFor: AuthorizationFor,
      tokenIds:tokenIds,
      assetIds:assetIds
    };
  }

  // Getters for each property
  getfirstName(): string {
    return this.Custodian.firstName;
  }

  getlastName(): string {
    return this.Custodian.lastName;
  }

  getemail(): string {
    return this.Custodian.email;
  }

  getphoneNumber(): number {
    return this.Custodian.phoneNumber;
  }

  getpassword(): string {
    return this.Custodian.password;
  }

  getlocation(): string {
    return this.Custodian.location;
  }

  getgovernmentID(): number {
    return this.Custodian.governmentID;
  }

  getedition(): string {
    return this.Custodian.edition;
  }

  getisAgent(): boolean {
    return this.Custodian.isAgent;
  }

  getAgentId(): number {
    return this.Custodian.AgentId;
  }

  getisAuthForBuyAndSell(): string {
    return this.Custodian.isAuthForBuyAndSell;
  }

  getsecurityId(): string {
    return this.Custodian.securityId;
  }

  getorgId(): string {
    return this.Custodian.orgId;
  }

  getAuthenticated(): string {
    return this.Custodian.Authenticated;
  }

  getAuthorizationFor(): string {
    return this.Custodian.AuthorizationFor;
  }
  getTokenIds(){
    return this.Custodian.tokenIds
  }

  getAssetIds(){
    return this.Custodian.assetIds
  }


  static initialState() { 
     this.defaultCustodian = {
      firstName: null,
      lastName: null,
      email: null,
      phoneNumber: null,
      password: null,
      location: null,
      governmentId: null,
      edition: null,
      isAgent: null,
      AgentId: null,
      isAuthForBuyAndSell: null,
      assetHolding: null,
      securityId: null,
      orgId: null,
      Authenticated: null,
      AuthorizationFor: null
    }
     return this.defaultCustodian
  }
  
  static toPlainObject(object:any) {
    const plainObject:any = {};
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        plainObject[key] = object[key];
      }
    }
    return plainObject;
  }
}


export default CustodianEntity