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
    const factory = await new ethers.ContractFactory(abi,bytecode,await this.provider.getSigner());
    const contract = await factory.deploy(...args);
    console.log("Deploying contract...");
    await contract.waitForDeployment()
    return contract.getAddress();
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
