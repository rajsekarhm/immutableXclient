export interface AssetDetailsType {
  walletAddress: string | undefined;
  isValidated: boolean;
  assestType: string | undefined;
  documentUrl: string | undefined;
  status: string;
}

export const AssetDetailsContract: AssetDetailsType = {
  walletAddress: undefined,
  isValidated: false,
  assestType: undefined,
  documentUrl: undefined,
  status: "pending",
};
