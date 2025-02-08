import IEntities from "./Interface/IEntitties";
import AssetModal from "../modals/AssetModal";
 type assetEn =  {symbol: string,
  assetAddress: string,
  isValidated: boolean,
  tokenId: string,
  tokenURI: string,
  value: number,
  isForSale: boolean}
class AssetEntity implements IEntities {
  assetEntity: AssetModal;
  static defaultAsset: any;
  constructor(
    {symbol,
      isValidated,
    assetAddress,
    tokenId,
    tokenURI,
    value,
    isForSale}: assetEn
  ) {
    this.assetEntity = {
      symbol: symbol,
      assetAddress: assetAddress,
      isValidated: isValidated,
      assetId: tokenId,
      assetURI: tokenURI,
      value: value,
      isForSale: isForSale,
    };
  }

  getAssetAddress() {
    return this.assetEntity.assetAddress;
  }

  getIsValidated() {
    return this.assetEntity.isValidated;
  }
  getTokenId() {
    return this.assetEntity.assetId;
  }
  getTokenURI() {
    return this.assetEntity.assetURI;
  }
  getValue() {
    return this.assetEntity.value;
  }
  getIsForSale() {
    return this.assetEntity.isForSale;
  }
  getSymbol() {
    return this.assetEntity.symbol;
  }

  static initialState() {
    this.defaultAsset = {
      walletAddress: null,
      isValidated: null,
      documentUrl: null,
      status: null,
      assetType: null,
      isForSale: null,
    };
    return this.defaultAsset;
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

export default AssetEntity;
