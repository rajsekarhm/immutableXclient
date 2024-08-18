// {
//   solana: {},
//   ethereum: {
//     endPoint: "https://shape-sepolia.g.alchemy.com/v2",
//     apiKey: "",
//     abi: {},
//     contractAddress: {},
//   },
//   zkSync: {},
// };
//

import ethersutils from "./ethereum/etherUtils";

interface BlockChainMetaInfo {
  endPoint: String;
  apiKey: String;
  abi: Array<any | unknown>;
  contractAddress: String;
}

type BlockChainsInfo = {
  ethereum: BlockChainMetaInfo;
};
const blockChainUtils: BlockChainsInfo = {
  ethereum: {
    endPoint: "https://shape-sepolia.g.alchemy.com/v2",
    apiKey: "",
    abi: ethersutils.abi.asset,
    contractAddress: ethersutils.contractAddress.asset_contract,
  },
};
export default blockChainUtils;
