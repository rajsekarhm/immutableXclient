import TokenModal from "../modals/TokenModal";
import IEntities from "./interface/IEntitties";

class TokenEntity implements IEntities {
  token!: TokenModal;
  static defaultToken: any;
  constructor(
    walletAddress: string,
    numberOfTokens: string,
    symbol: string,
    tokenName: string,
    tokenId: string
  ) {
    this.token = {
      walletAddress: walletAddress,
      numberOfTokens: numberOfTokens,
      symbol: symbol,
      tokenName: tokenName,
      tokenId: tokenId,
    };
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
