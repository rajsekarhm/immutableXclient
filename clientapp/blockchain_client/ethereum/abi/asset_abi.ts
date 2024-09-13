const asset_abi: any = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_cid",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_assetType",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_securityId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_currentOwner",
        type: "string",
      },
      {
        internalType: "address",
        name: "_assestAddress",
        type: "address",
      },
    ],
    name: "createVirutalAsset",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "virtualize",
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
    stateMutability: "payable",
    type: "receive",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "assetAddr",
        type: "address",
      },
    ],
    name: "deleteAsset",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "str",
        type: "string",
      },
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "num",
        type: "uint256",
      },
    ],
    name: "generateUniqueID",
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
    inputs: [
      {
        internalType: "uint256",
        name: "num",
        type: "uint256",
      },
    ],
    name: "uintToString",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

export default asset_abi;
