import IContract from "./IContract";
import { ethers } from "ethers";
class ContractETH implements IContract {
  provider: any;
  contract: any;
  signer: any;
  constructor(type: string, blockChainObject: any) {
    switch (type) {
      case "browser": {
        this.provider = new ethers.BrowserProvider(window.ethereum)
      }
      default: {
      }
    }
  }
  async createContract(abi: any, bytecode: any, ...args: any) {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const factory = new ethers.ContractFactory(abi, bytecode, signer);
  
      console.log("Deploying contract...");
      const contract = await factory.deploy(...args); 
  
      await contract.waitForDeployment();
  
      const address = await contract.getAddress();
      console.log("Contract deployed at:", address);
  
      return address;
    } catch (error) {
      console.error("Error deploying contract:", error);
      throw error;
    }
  }
  async interactWithContract(contractAddress: string, abi: any) {
    this.contract = new ethers.Contract(contractAddress, abi, await this.provider.getSigner());
    return this.contract
  }
  async sign() {
    this.signer = await this.provider.getSigner();
    return this.sign;
  }
  parseEther(ether: string) {
    return  ethers.parseEther(ether);
  }
  formatEther(wei: any) {
    return ethers.formatEther(wei);
  }
}

export default ContractETH;
