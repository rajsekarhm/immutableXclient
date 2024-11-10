import IEntities from "./Interface/IEntitties";
import AssetModal from "../modals/AssetModal";

class AssetEntity implements IEntities {
  assetEntity: AssetModal;

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
    return new AssetEntity("",false,"","",false,false)
  }
}

export default AssetEntity;
