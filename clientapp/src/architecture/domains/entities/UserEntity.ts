import AssetModal from "../modals/AssetModal";
import UserModal from "../modals/UserModal";
import IEntities from "./Interface/IEntitties";

class UserEntity implements IEntities {
  User: UserModal;

  constructor(
    securityId: string ,
    firstname: string,
    lastname: string,
    email: string,
    phoneNumber: number,
    password: string ,
    location: string ,
    governmentId: number,
    edition: string,
    isAgent: boolean,
    AgentId: number,
    isAuthForBuyAndSell: string,
    assetHolding?: AssetModal
  ) {
    this.User = {
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
    };
  }

  getFirstname() : string {
    return this.User.firstname;
  }

  getLastname() : string {
    return this.User.lastname;
  }

  getEmail() : string {
    return this.User.email;
  }

  getphoneNumber() : number {
    return this.User.phoneNumber;
  }

  getpassword(): string  {
    return this.User.password;
  }

  getlocation() : string {
    return this.User.location;
  }

  getgovernmentId(): number  {
    return this.User.governmentId;
  }

  getedition() : string {
    return this.User.edition;
  }

  getisAgent():  boolean {
    return this.User.isAgent;
  }

  getAgentId() : number {
    return this.User.AgentId;
  }

  getisAuthForBuyAndSell() : string {
    return this.User.isAuthForBuyAndSell;
  }

  getassetHolding() : AssetModal | undefined {
    return this.User.assetHolding || undefined;
  }

  getsecurityId() : string {
    return this.User.securityId;
  }

  static initialState() {
    return new UserEntity("","","","",0,"","",0,"",false,0,"")
  }
}

export default UserEntity;
