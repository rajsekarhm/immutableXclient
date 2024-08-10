type cardType = {
  image: string;
  title: string;
  description: string;
  stakeholder: string;
  buttonText: string;
  onClickInDetials?: () => void;
  onButtonClick?: () => void | any;
  price: string | number;
  detailsButtonText?: string;
};

type assestStatusType = {
  isAvailableForSell: boolean;
  price: string | number;
  stakeholder: string;
  walletAddress: string;
};

export { assestStatusType, cardType };
