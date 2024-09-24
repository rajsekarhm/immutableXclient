module.exports = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "asset_address",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner_address",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "assetUniqueId",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			}
		],
		"name": "AssetVirtualized",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "asset_address",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_input",
				"type": "uint256"
			}
		],
		"name": "convertUintToBytes32",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "asset_address",
				"type": "address"
			}
		],
		"name": "getAssetDetails",
		"outputs": [
			{
				"internalType": "address",
				"name": "_asset_address",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_owner_address",
				"type": "address"
			},
			{
				"internalType": "bytes32",
				"name": "_assetUniqueId",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "_price",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_asset_address",
				"type": "address"
			}
		],
		"name": "getOwnerByAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "_owner_address",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_asset_address",
				"type": "address"
			}
		],
		"name": "transferOwnerShip",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_asset_address",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_assetUniqueId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_price",
				"type": "uint256"
			}
		],
		"name": "virtualize",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]