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
  onClick?: () => void | any;
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
      id:"one",
      title: "Asset A",
      description: "loaded in ipfs",
      content:{   
        walletAddress: "0x212f916DCfF88AC66883a2175de5BDa52C6bA968",
        tokenId: 403,
        price: '$ 1000'
      }
    },
    image: "https://via.placeholder.com/150", // Replace with an actual image URL
    buttonText: "Buy Now",
    detailsButtonText: "view Blockchain explorer",
    onClickInDetails: () => {
      console.log("move to blockchain explorer");
    },
    onClick: () => {
      console.log("Redirecting to blockchain explorer...");
    },
    isInputNeed: true,
  },
  {
    card_details: {
      id:"two",
      title: "Asset B",
      description: "Another asset example",
      content:{   
        walletAddress: "0x212f916DCfF88AC66883a2175de5BDa52C6bA968",
        tokenId: 403,
        price: '$ 1000'
      }
    },
    image: "https://via.placeholder.com/150", // Replace with an actual image URL
    buttonText: "Buy Now",
    detailsButtonText: "view Blockchain explorer",
    onClickInDetails: () => {
      console.log("move to blockchain explorer");
    },
    onClick: () => {
      console.log("Redirecting to blockchain explorer...");
    },
    isInputNeed: true,
  },
  {
    card_details: {
      id:"two",
      title: "Asset C",
      description: "Another asset example",
      content:{   
        walletAddress: "0x212f916DCfF88AC66883a2175de5BDa52C6bA968",
        tokenId: 403,
        price: '$ 1000'
      }
    },
    image: "https://via.placeholder.com/150", // Replace with an actual image URL
    buttonText: "Buy Now",
    detailsButtonText: "view Blockchain explorer",
    onClickInDetails: () => {
      console.log("move to blockchain explorer");
    },
    onClick: () => {
      console.log("Redirecting to blockchain explorer...");
    },
    isInputNeed: true,
  },
  {
    card_details: {
      id:"two",
      title: "Asset D",
      description: "Another asset example",
      content:{   
        walletAddress: "0x212f916DCfF88AC66883a2175de5BDa52C6bA968",
        tokenId: 403,
        price: '$ 1000'
      }
    },
    image: "https://via.placeholder.com/150", // Replace with an actual image URL
    buttonText: "Buy Now",
    detailsButtonText: "view Blockchain explorer",
    onClickInDetails: () => {
      console.log("move to blockchain explorer");
    },
    onClick: () => {
      console.log("Redirecting to blockchain explorer...");
    },
    isInputNeed: true,
  },
  {
    card_details: {
      id:"two",
      title: "Asset E",
      description: "Another asset example",
      content:{   
        walletAddress: "0x212f916DCfF88AC66883a2175de5BDa52C6bA968",
        tokenId: 403,
        price: '$ 1000'
      }
    },
    image: "https://via.placeholder.com/150", // Replace with an actual image URL
    buttonText: "Buy Now",
    detailsButtonText: "view Blockchain explorer",
    onClickInDetails: () => {
      console.log("move to blockchain explorer");
    },
    onClick: () => {
      console.log("Redirecting to blockchain explorer...");
    },
    isInputNeed: true,
  },
  {
    card_details: {
      id:"two",
      title: "Asset F",
      description: "Another asset example",
      content:{   
        walletAddress: "0x212f916DCfF88AC66883a2175de5BDa52C6bA968",
        tokenId: 403,
        price: '$ 1000'
      }
    },
    image: "https://via.placeholder.com/150", // Replace with an actual image URL
    buttonText: "Buy Now",
    detailsButtonText: "view Blockchain explorer",
    onClickInDetails: () => {
      console.log("move to blockchain explorer");
    },
    onClick: () => {
      console.log("Redirecting to blockchain explorer...");
    },
    isInputNeed: true,
  }
];

export default mockCards;
