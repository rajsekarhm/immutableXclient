type titleType= {
  variant ?: string
  style : any
}

type priceType = {
  variant ?: string
  style : any
}

type descriptionType = {
  variant ?: string
  style : any
}

type stakeholderType = {
  variant ?: string
  style : any
}

interface cardDetails {
  title:titleType
  price:priceType
  stakeHolder:stakeholderType
  description:descriptionType
}
type cardType = {
  className?:string
  image: string;
  title: string;
  description: string;
  stakeholder: string;
  price: string | number;
  detailsButtonText?: string;
  onClickInDetails?: () => void | any;
  buttonText: string;
  onButtonClick?: () => void | any;
};

type assetStatusType = {
  isAvailableForSell: boolean;
  price: string | number;
  stakeholder: string;
  walletAddress: string;
};

export { assetStatusType, cardType };


/**
 * {
    image: "https://via.placeholder.com/150", // Replace with an actual image URL
    title: "Virtualized Asset",
    description:
      "This asset is securely virtualized on the blockchain, ensuring transparency and immutability.",
    buttonText: "View on Blockchain",
    stakeholder: "Blockchain Manager",
    price: 200,
    onClickInDetails: () => {
      console.log("move to blockchain explorer");
    },
    onButtonClick: () => {
      console.log("Redirecting to blockchain explorer...");
    },
    detailsButtonText: "view Blockchain explorer",
  }
 */