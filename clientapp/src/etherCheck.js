const { ethers, parseEther } = require("ethers");

async function etherDone(ownerAddress,_price) {
  const recipient = '0x212f916DCfF88AC66883a2175de5BDa52C6bA968';
  const eth = new ethers.BrowserProvider(window.ethereum);
  await eth.send("eth_requestAccounts", []);
  const signer = await eth.getSigner();
  const _address = "0xA7F86189fcAd63b7f93A4109b3d7cC29437c659c";
  const price = parseEther('1');
  const tx = {
    to:recipient,
    value:price
  }
  const _abi = [
    {
      inputs: [],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "allowance",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "needed",
          type: "uint256",
        },
      ],
      name: "ERC20InsufficientAllowance",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "sender",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "balance",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "needed",
          type: "uint256",
        },
      ],
      name: "ERC20InsufficientBalance",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "approver",
          type: "address",
        },
      ],
      name: "ERC20InvalidApprover",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "receiver",
          type: "address",
        },
      ],
      name: "ERC20InvalidReceiver",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "sender",
          type: "address",
        },
      ],
      name: "ERC20InvalidSender",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
      ],
      name: "ERC20InvalidSpender",
      type: "error",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "Approval",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "Transfer",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_landAddress",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "_landID",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "_Address",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "_price",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_propertyPID",
          type: "uint256",
        },
        {
          internalType: "bool",
          name: "_isLandVerified",
          type: "bool",
        },
        {
          internalType: "address payable",
          name: "_landOwner",
          type: "address",
        },
      ],
      name: "addLand",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_id",
          type: "address",
        },
        {
          internalType: "string",
          name: "_name",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "_age",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "_city",
          type: "string",
        },
        {
          internalType: "string",
          name: "_aadharNumber",
          type: "string",
        },
        {
          internalType: "string",
          name: "_panNumber",
          type: "string",
        },
        {
          internalType: "string",
          name: "_email",
          type: "string",
        },
        {
          internalType: "bool",
          name: "_isUserVerified",
          type: "bool",
        },
      ],
      name: "addUser",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
      ],
      name: "allowance",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "approve",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "balanceOf",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "decimals",
      outputs: [
        {
          internalType: "uint8",
          name: "",
          type: "uint8",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "encryptAdd",
          type: "address",
        },
      ],
      name: "getEncryptdata",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address payable",
          name: "_getLand",
          type: "address",
        },
      ],
      name: "getLand",
      outputs: [
        {
          internalType: "uint256",
          name: "landID",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "landAddress",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "_price",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "propertyPID",
          type: "uint256",
        },
        {
          internalType: "bool",
          name: "isforSell",
          type: "bool",
        },
        {
          internalType: "bool",
          name: "isLandVerified",
          type: "bool",
        },
        {
          internalType: "address payable",
          name: "landOwner",
          type: "address",
        },
        {
          internalType: "bool",
          name: "isRemoved",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_currentOwner",
          type: "address",
        },
      ],
      name: "getlandowner",
      outputs: [
        {
          internalType: "address payable",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "add1",
          type: "address",
        },
        {
          internalType: "address payable",
          name: "add2",
          type: "address",
        },
        {
          internalType: "string",
          name: "data",
          type: "string",
        },
      ],
      name: "hashWithKeccak256",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "pure",
      type: "function",
    },
    {
      inputs: [],
      name: "name",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address payable",
          name: "_toremove",
          type: "address",
        },
      ],
      name: "removeLand",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "symbol",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "totalSupply",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "transfer",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_sentTo",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amttoSent",
          type: "uint256",
        },
      ],
      name: "transferEther",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "transferFrom",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "landAddress",
          type: "address",
        },
        {
          internalType: "address payable",
          name: "_newOwner",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amttoSent",
          type: "uint256",
        },
      ],
      name: "transferOwnerShip",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      stateMutability: "payable",
      type: "receive",
    },
  ];

  const interaction =  new ethers.Contract(_address,_abi,signer)
  try{
  // console.log(await interaction.transferEther(recipient,price))
  const txResponse = await signer.sendTransaction(tx)
  console.log(`Transaction hash: ${txResponse.hash}`);
  }catch (error) {
    console.error('Error sending Ether:', error);
}
}

module.exports = etherDone
