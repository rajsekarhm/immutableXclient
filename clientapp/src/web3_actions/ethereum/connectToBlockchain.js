import { ethers } from "ethers";
const blockChain = {
  solana: {},
  ethereum: {
    endPoint: "https://shape-sepolia.g.alchemy.com/v2",
    apiKey: "",
    abi: {},
    contractAddress: {},
  },
  zkSync: {},
};

async function connectToBlockChain(blockChainUtils, customProvider = false) {
  const { endPoint, apiKey, abi, contractAddress } = blockChainUtils;
  const provider = customProvider
    ? new ethers.providers.JsonRpcProvider(`${endPoint}/${apiKey}`)
    : customProvider;
  const contract = new ethers.Contract(contractAddress, abi, provider);
  return contract;
}

function convertToEthers(address) {
  return ethers.utils.formatEther(address);
}

function parseEther(_Ethers) {
  return ethers.utils.parseEther(_Ethers);
}

async function connectWithWindow(blockChainUtils) {
  var signer;
  var provider;
  if (typeof window.ethereum !== "undefined") {
    try {
      provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      signer = provider.getSigner();
    } catch (error) {
      console.error("Error connecting to MetaMask:", error);
    }
  } else {
    console.error("MetaMask is not installed.");
  }
  return connectToBlockChain(blockChainUtils, signer);
}

export { connectToBlockChain, parseEther, convertToEthers, connectWithWindow };
