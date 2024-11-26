export  default interface AssetModal {
    symbol:string
    walletAddress: string ;
    ownerAddress: string ;
    isValidated: boolean;
    tokenId: string ;
    tokenURI: string ;
    value: string;
    associatedUser?:any;
    isForSale:boolean;
    explorerURL?:string
  }
