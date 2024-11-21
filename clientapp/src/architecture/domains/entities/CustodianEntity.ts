import AssetModal from '../modals/AssetModal';
import CustodianModal from '../modals/CustodianModal';

class CustodianEntity {
  Custodian: CustodianModal;
  static defaultCustodian: any;
  constructor(
    securityId: string,
    firstname: string,
    lastname: string,
    email: string,
    phoneNumber: number,
    password: string,
    location: string,
    governmentId: number,
    edition: string,
    isAgent: boolean,
    AgentId: number,
    isAuthForBuyAndSell: string,
    orgId: string,
    Authenticated: string,
    AuthorizationFor: string,
    assetHolding?: AssetModal
  ) {
    this.Custodian = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      phoneNumber: phoneNumber,
      password: password,
      location: location,
      governmentId: governmentId,
      edition: edition,
      isAgent: isAgent,
      AgentId: AgentId,
      isAuthForBuyAndSell: isAuthForBuyAndSell,
      assetHolding: assetHolding,
      securityId: securityId,
      orgId: orgId,
      Authenticated: Authenticated,
      AuthorizationFor: AuthorizationFor
    };
  }

  // Getters for each property
  get firstname(): string {
    return this.Custodian.firstname;
  }

  get lastname(): string {
    return this.Custodian.lastname;
  }

  get email(): string {
    return this.Custodian.email;
  }

  get phoneNumber(): number {
    return this.Custodian.phoneNumber;
  }

  get password(): string {
    return this.Custodian.password;
  }

  get location(): string {
    return this.Custodian.location;
  }

  get governmentId(): number {
    return this.Custodian.governmentId;
  }

  get edition(): string {
    return this.Custodian.edition;
  }

  get isAgent(): boolean {
    return this.Custodian.isAgent;
  }

  get AgentId(): number {
    return this.Custodian.AgentId;
  }

  get isAuthForBuyAndSell(): string {
    return this.Custodian.isAuthForBuyAndSell;
  }

  get assetHolding(): AssetModal | undefined {
    return this.Custodian.assetHolding;
  }

  get securityId(): string {
    return this.Custodian.securityId;
  }

  get orgId(): string {
    return this.Custodian.orgId;
  }

  get Authenticated(): string {
    return this.Custodian.Authenticated;
  }

  get AuthorizationFor(): string {
    return this.Custodian.AuthorizationFor;
  }
  static initialState() { 
     this.defaultCustodian = {
      firstname: null,
      lastname: null,
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
  
  toPlainObject(object:any) {
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