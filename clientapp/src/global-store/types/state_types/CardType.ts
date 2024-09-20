type titleType= {
  variant ?: string
  details: string
  style ?: any
  component?:string
}

type priceType = {
  variant ?: string
  details: string
  style ?: any
  component?:string
}

type descriptionType = {
  variant ?: string
  details: string
  style ?: any
  component?:string
}

type stakeholderType = {
  variant ?: string
  details: string
  style ?: any
  component?:string
}

interface card_details_type {
  title:titleType
  price:priceType
  stakeHolder:stakeholderType
  description:descriptionType
}

type cardType = {
  className?:string
  image: string;
  card_details:card_details_type
  detailsButtonText?: string;
  onClickInDetails?: () => void | any;
  buttonText: string;
  onButtonClick?: () => void | any;
  isInputNeed?:boolean;
  onChangeAction?:() => any
};

type assetStatusType = {
  isAvailableForSell: boolean;
  price: string | number;
  stakeholder: string;
  walletAddress: string;
};

export { assetStatusType, cardType };
