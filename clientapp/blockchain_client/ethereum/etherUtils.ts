import asset_abi from "./abi/asset_abi";
import multiSig_abi from "./abi/multiSig_abi";

const ethersutils: any = {
  abi: { asset: asset_abi, multiSig: multiSig_abi },
  contractAddress: {
    assest_contract: "0x80eed5986d0e00e27cb6c34ed3a910e3e8763818",
    multiSig_constract: "0xe4a7810d289a80d5603051654024dce1c417cb7a",
  },
};

export default ethersutils;
