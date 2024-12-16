export  default interface AssetModal {
    symbol:string
    assetAddress: string ;
    isValidated: boolean;
    assetId: string ;
    assetURI: string ;
    value: number;
    associatedUser?:any;
    isForSale:boolean;
    explorerURL?:string
    isFungible?:boolean
  }
