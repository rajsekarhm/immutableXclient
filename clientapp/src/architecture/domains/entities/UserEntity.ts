import AssetModal from "../modals/AssetModal";
import UserModal from "../modals/UserModal";
import IEntities from "./Interface/IEntitties";

class UserEntity implements IEntities {
  User !: UserModal;
  static defaultUser: any;
  constructor(entity:UserModal) {
    this.User = {
     ...entity
    };
  }

  getFirstName(): string {
    return this.User.firstName;
  }

  getLastName(): string {
    return this.User.lastName;
  }

  getEmail(): string {
    return this.User.email;
  }

  getphoneNumber(): number {
    return this.User.phoneNumber;
  }

  getpassword(): string {
    return this.User.password;
  }

  getlocation(): string {
    return this.User.location;
  }

  governmentID(): number {
    return this.User.governmentID;
  }

  getedition(): string {
    return this.User.edition;
  }

  getisAgent(): boolean {
    return this.User.isAgent;
  }

  getAgentId(): number {
    return this.User.AgentId;
  }

  getisAuthForBuyAndSell(): string {
    return this.User.isAuthForBuyAndSell;
  }

  getassets(): AssetModal[] | undefined {
    return this.User.assetIds;
  }

  getsecurityId(): string {
    return this.User.securityId;
  }

  static initialState() {
    this.defaultUser = {
      firstName: null,
      lastName: null,
      email: null,
      phoneNumber: null,
      password: null,
      location: null,
      governmentID: null,
      edition: null,
      isAgent: null,
      AgentId: null,
      isAuthForBuyAndSell: null,
      assetHolding: null,
      securityId: null,
      assetIds:[],
      tokenIds:[]
    };
    return this.defaultUser;
  }

  static toPlainObject(object: any) {
    const plainObject: any = {};
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        plainObject[key] = object[key];
      }
    }
    return plainObject;
  }

}

export default UserEntity;
