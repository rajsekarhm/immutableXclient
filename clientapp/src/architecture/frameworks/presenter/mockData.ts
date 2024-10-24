import { cardType } from "../../../global-store/types/state_types/CardType";
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
