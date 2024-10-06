export interface AssetDetailsType {
  walletAddress: string | undefined;
  isValidated: boolean;
  assetType: string | undefined;
  documentUrl: string | undefined;
  status: string;
}

export const AssetDetailsContract: AssetDetailsType = {
  walletAddress: undefined,
  isValidated: false,
  assetType: undefined,
  documentUrl: undefined,
  status: "pending",
};
