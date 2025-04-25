import TokenModal from "../modals/TokenModal";
import IEntities from "./Interface/IEntitties";

class TokenEntity implements IEntities {
  token!: TokenModal;
  static defaultToken: any;
  constructor(entity:TokenModal) {
    this.token = {...entity}
  }

  static initialState() {
    this.defaultToken = {
      walletAddress: "",
      numberOfTokens: "",
      symbol: "",
      tokenName: "",
      tokenId: "",
    };
    return this.defaultToken;
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

export default TokenEntity;
