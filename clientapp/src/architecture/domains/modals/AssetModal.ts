export  default interface AssetModal {
    symbol:string | null
    assetAddress: string | null ;
    isValidated: boolean;
    assetId: string | null ;
    assetURI: string | null ;
    value: number;
    associatedUser?:any;
    isForSale:boolean;
    explorerURL?:string
    isFungible?:boolean
  }
