import { cardType } from "./global-store/types/stateType/CardType";
const mockCards: cardType[] = [
  {
    image: "https://via.placeholder.com/150", // Replace with an actual image URL
    title: "Virtualized Asset",
    description:
      "This asset is securely virtualized on the blockchain, ensuring transparency and immutability.",
    buttonText: "View on Blockchain",
    stakeholder: "Blockchain Manager",
    price: 300,
    onClickInDetails: () => {
      console.log("move to blockchain explorer");
    },
    onButtonClick: () => {
      console.log("Redirecting to blockchain explorer...");
    },
    detailsButtonText: "view Blockchain explorer",
  },
  {
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
  },
  {
    image: "https://via.placeholder.com/150", // Replace with an actual image URL
    title: "Virtualized Asset",
    description:
      "This asset is securely virtualized on the blockchain, ensuring transparency and immutability.",
    buttonText: "View on Blockchain",
    stakeholder: "Blockchain Manager",
    price: 500,
    onClickInDetails: () => {
      console.log("move to blockchain explorer");
    },
    onButtonClick: () => {
      console.log("Redirecting to blockchain explorer...");
    },
    detailsButtonText: "view Blockchain explorer",
  },
  {
    image: "https://via.placeholder.com/150", // Replace with an actual image URL
    title: "Virtualized Asset",
    description:
      "This asset is securely virtualized on the blockchain, ensuring transparency and immutability.",
    buttonText: "View on Blockchain",
    stakeholder: "Blockchain Manager",
    price: 1000,
    onClickInDetails: () => {
      console.log("move to blockchain explorer");
    },
    onButtonClick: () => {
      console.log("Redirecting to blockchain explorer...");
    },
    detailsButtonText: "view Blockchain explorer",
  },
];

export default mockCards;
