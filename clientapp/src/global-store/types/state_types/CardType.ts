import { field_DataVault } from "../../../components/DataVault"

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

type assetUniqueId = {
  variant ?: string
  details: string
  style ?: any
  component?:string
}

interface asset_details_type {
  title:titleType
  price:priceType
  stakeHolder:stakeholderType
  description:descriptionType
  asset_unique_id:assetUniqueId
}

type cardType = {
  className?:string
  image: string;
  card_details:asset_details_type | any
  detailsButtonText?: string;
  onClickInDetails?: () => void | any;
  buttonText: string;
  onButtonClick?: () => void | any;
  isInputNeed?:boolean;
  onChangeAction?:() => any
  fieldDetails ?: field_DataVault
};

type assetStatusType = {
  isAvailableForSell: boolean;
  price: string | number;
  stakeholder: string;
  walletAddress: string;
};

export { assetStatusType, cardType };
