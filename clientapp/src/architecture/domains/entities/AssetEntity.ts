import IEntities from "./Interface/IEntitties";
import AssetModal from "../modals/AssetModal";

class AssetEntity implements IEntities {
  assetEntity: AssetModal;
  static defaultAsset:any;
  constructor(
    walletAddress: string,
    isValidated: boolean,
    assetType: string,
    documentUrl: string,
    status: boolean,
    isForSale:boolean
  ) {
    this.assetEntity = {
      walletAddress: walletAddress,
      isValidated: isValidated,
      documentUrl: documentUrl,
      status: status,
      assetType: assetType,
      isForSale:isForSale
    };
  }

  getWalletAddress() {
    return this.assetEntity.walletAddress;
  }

  getIsValidated() {
    return this.assetEntity.isValidated;
  }

  getAssetType() {
    return this.assetEntity.assetType;
  }

  getDocumentUrl() {
    return this.assetEntity.documentUrl;
  }

  getStatus() {
    return this.assetEntity.status;
  }

  static initialState() {
     this.defaultAsset = {
      walletAddress: null,
      isValidated: null,
      documentUrl: null,
      status: null,
      assetType: null,
      isForSale:null
    }
    return this.defaultAsset;
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

export default AssetEntity;
