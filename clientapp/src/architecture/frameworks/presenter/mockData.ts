type card_title_type= {
  variant ?: string
  details: string
  style ?: any
  component?:string
}

type card_price_type = {
  variant ?: string
  details: string
  style ?: any
  component?:string
}
type asset_unique_id = {
  variant ?: string
  details: string
  style ?: any
  component?:string
}

type descriptionType = {
  variant ?: string
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
  title:card_title_type
  price:card_price_type
  stakeHolder:stakeholderType
  description:descriptionType,
  asset_unique_id:asset_unique_id
}

type cardType = {
  className?:string
  image: string;
  card_details:any
  detailsButtonText?: string;
  onClickInDetails?: () => void | any;
  buttonText: string;
  onButtonClick?: () => void | any;
  isInputNeed:Boolean
};

type assetStatusType = {
  isAvailableForSell: boolean;
  price: string | number;
  stakeholder: string;
  walletAddress: string;
};

export { assetStatusType, cardType };

const mockCards: cardType[] = [
  {
    card_details:  {
      title: "Virtualized Asset",
      price: 1000,
      description: "A digital asset in the market",
      stakeHolder: "justinSun",
      asset_unique_id: 403,
    },
    image: "https://via.placeholder.com/150", // Replace with an actual image URL
    buttonText: "Buy Now",
    detailsButtonText: "view Blockchain explorer",
    onClickInDetails: () => {
      console.log("move to blockchain explorer");
    },
    onButtonClick: () => {
      console.log("Redirecting to blockchain explorer...");
    },
    isInputNeed: true,
  },
  {
    card_details: {
      title: "Virtualized Asset 2",
      price: 1500,
      description: "Another asset example",
      stakeHolder: "elonMusk",
      asset_unique_id: 404,
    },
    image: "https://via.placeholder.com/150", // Replace with an actual image URL
    buttonText: "Buy Now",
    detailsButtonText: "view Blockchain explorer",
    onClickInDetails: () => {
      console.log("move to blockchain explorer");
    },
    onButtonClick: () => {
      console.log("Redirecting to blockchain explorer...");
    },
    isInputNeed: true,
  }
];

export default mockCards;
