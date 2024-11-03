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
  title:card_title_type
  price:card_price_type
  stakeHolder:stakeholderType
  description:descriptionType,
  asset_unique_id:asset_unique_id
}

type cardType = {
  className?:string
  image: string;
  card_details:card_details_type
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
    card_details: {
      title: {
        variant: "h5",
        details: "Virtualized Asset",
        component: "div",
      },
      price: {
        variant: "h7",
        details: "1000",
        component: "div",
        style: { color: "text.secondary" },
      },
      description: {
        variant: "p",
        details:
          "This asset is securely virtualized on the blockchain, ensuring transparency and immutability.",
        component: "div",
        style: { color: "text.secondary" },
      },
      stakeHolder: {
        variant: "h7",
        details: "JustinSun",
        component: "div",
        style: { color: "text.secondary" },
      },
      asset_unique_id: {
        variant: "h7",
        details: "unique 1",
        component: "div",
        style: { color: "text.secondary" },
      },
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
      title: {
        variant: "h5",
        details: "Virtualized Asset",
        component: "div",
      },
      price: {
        variant: "h7",
        details: "1000",
        component: "div",
        style: { color: "text.secondary" },
      },
      description: {
        variant: "p",
        details:
          "This asset is securely virtualized on the blockchain, ensuring transparency and immutability.",
        component: "div",
        style: { color: "text.secondary" },
      },
      stakeHolder: {
        variant: "h7",
        details: "JustinSun",
        component: "div",
        style: { color: "text.secondary" },
      },
      asset_unique_id: {
        variant: "h7",
        details: "unique 2",
        component: "div",
        style: { color: "text.secondary" },
      },
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
      title: {
        variant: "h5",
        details: "Virtualized Asset",
        component: "div",
      },
      price: {
        variant: "h7",
        details: "1000",
        component: "div",
        style: { color: "text.secondary" },
      },
      stakeHolder: {
        variant: "h7",
        details: "JustinSun",
        component: "div",
        style: { color: "text.secondary" },
      },
      description: {
        variant: "p",
        details:
          "This asset is securely virtualized on the blockchain, ensuring transparency and immutability.",
        component: "div",
        style: { color: "text.secondary" },
      },
      asset_unique_id: {
        variant: "h7",
        details: "unique 3",
        component: "div",
        style: { color: "text.secondary" },
      },
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
      title: {
        variant: "h5",
        details: "Virtualized Asset",
        component: "div",
      },
      price: {
        variant: "h7",
        details: "1000",
        component: "div",
        style: { color: "text.secondary" },
      },
      description: {
        variant: "p",
        details:
          "This asset is securely virtualized on the blockchain, ensuring transparency and immutability.",
        component: "div",
        style: { color: "text.secondary" },
      },
      stakeHolder: {
        variant: "h7",
        details: "JustinSun",
        component: "div",
        style: { color: "text.secondary" },
      },
      asset_unique_id: {
        variant: "h7",
        details: "unique 4",
        component: "div",
        style: { color: "text.secondary" },
      },
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
];

export default mockCards;
