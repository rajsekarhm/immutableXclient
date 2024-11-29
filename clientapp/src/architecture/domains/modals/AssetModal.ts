export  default interface AssetModal {
    symbol:string
    assetAddress: string ;
    isValidated: boolean;
    tokenId: string ;
    tokenURI: string ;
    value: number;
    associatedUser?:any;
    isForSale:boolean;
    explorerURL?:string
    isFungible?:boolean
  }
