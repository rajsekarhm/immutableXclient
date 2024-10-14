import AssetModal from '../modals/AssetModal';
import CustodianModal from '../modals/Custodian';

class CustodianEntity {
  Custodian: CustodianModal;

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
    return new CustodianEntity("","","","",0,"","",0,"",false,0,"","","","")
  }
}


export default CustodianEntity