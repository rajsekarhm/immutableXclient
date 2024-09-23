// // SPDX-License-Identifier: GPL-3.0

// pragma solidity >=0.8.2 <0.9.0;

// import "@openzeppelin/contracts/utils/Strings.sol";
// import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";

// contract virtualizeAsset{

//     receive() external payable { }

//   using Strings for uint256;
//     struct assetDetail{
//         bytes32 assetUniqueId;
//         uint cid;
//         string assetType;
//         uint securityId;
//         string currentOwner;
//         address assetAddress;
//         address payable ownerAddress;
//     }

//     uint assestVirutalized;
//     address payable  []  assestOwners;
//     mapping (address => assetDetail) assestMap;
//     struct ownerShips{
//         address payable from;
//         address payable  to;
//     }
//     mapping (bytes32 => ownerShips) assetOwnerShipHistory;

//     modifier validate(address assetAddress){
//         require(msg.sender == assestMap[assetAddress].ownerAddress, "not authorized");
//         _;
//     }

//     function virtualize() public returns(bool){
//         return true;
//     }

//     function generateUniqueID(string memory str, address addr, uint256 num) public pure returns (bytes32) {
//         // Concatenate the values
//         string memory concatenatedString = string(abi.encodePacked(str, toString(addr),uintToString(num)));

//         // Hash the concatenated string
//         bytes32 uniqueID = keccak256(abi.encodePacked(concatenatedString));

//         return uniqueID;
//     }

//     // Helper function to convert address to string
//     function toString(address x) internal pure returns (string memory) {
//         bytes memory s = new bytes(40);
//         for (uint i = 0; i < 20; i++) {
//             bytes1 b = bytes1(uint8(uint(uint160(x)) / (2**(8*(19 - i)))));
//             bytes1 hi = bytes1(uint8(b) / 16);
//             bytes1 lo = bytes1(uint8(b) - 16 * uint8(hi));
//             s[2*i] = char(hi);
//             s[2*i + 1] = char(lo);
//         }
//         return string(s);
//     }

//     // Helper function to convert byte to char
//     function char(bytes1 b) internal pure returns (bytes1 c) {
//         if (uint8(b) < 10) return bytes1(uint8(b) + 0x30);
//         else return bytes1(uint8(b) + 0x57);
//     }


//       function uintToString(uint256 num) public pure returns (string memory) {
//         if (num == 0) {
//             return "0";
//         }

//         uint256 tempNum = num;
//         uint256 digits;

//         while (tempNum != 0) {
//             digits++;
//             tempNum /= 10;
//         }

//         bytes memory buffer = new bytes(digits);
//         while (num != 0) {
//             digits--;
//             buffer[digits] = bytes1(uint8(48 + num % 10));
//             num /= 10;
//         }

//         return string(buffer);
//     }


//     function createVirutalAsset(uint _cid,
//     string memory _assetType,
//     uint _securityId,
//      string memory _currentOwner,
//      address _assestAddress 
//      ) public{
//         assetDetail memory newAsset = assetDetail( generateUniqueID(_currentOwner, _assestAddress, _cid),_cid,_assetType,_securityId,_currentOwner,_assestAddress,payable(msg.sender));
//         assestMap[_assestAddress] =  newAsset; 
//         assestOwners.push(payable (msg.sender));
//     }

//     function deleteAsset(address assetAddr) public view validate(assetAddr){
//         address payable[]  memory filteredOwners;
//         for(uint i =0;i<assestOwners.length;i++){
//             if(assetAddr == assestMap[assetAddr].assetAddress){
//                 continue ;
//             }
//             filteredOwners[i] = assestOwners[i];
//         }
//     }

// }


pragma solidity >=0.8.2 <0.9.0;

contract asset { 
    struct asset_details {
        address asset_address;
        address owner_address;
        bytes32 assetUniqueId;
        uint price;
    }
    mapping (address => asset_details) asset_map;

    // Events
    event AssetVirtualized(address indexed asset_address, address indexed owner_address, bytes32 assetUniqueId, uint price);
    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner, address indexed asset_address, uint price);

    // Function to virtualize an asset
    function virtualize(address _asset_address, uint _assetUniqueId, uint _price) public {
        asset_details memory newAsset = asset_details(_asset_address, msg.sender, convertUintToBytes32(_assetUniqueId), _price);
        asset_map[_asset_address] = newAsset;
        
        // Emit the AssetVirtualized event
        emit AssetVirtualized(_asset_address, msg.sender, convertUintToBytes32(_assetUniqueId), _price);
    }

    // Function to get asset details
    function getAssetDetails(address asset_address) public view returns (address _asset_address, address _owner_address, bytes32 _assetUniqueId, uint _price) {
        asset_details memory _assetDetails = asset_map[asset_address];
        return (_assetDetails.asset_address, _assetDetails.owner_address, _assetDetails.assetUniqueId, _assetDetails.price);
    }

    // Function to convert uint to bytes32
    function convertUintToBytes32(uint256 _input) public pure returns (bytes32) {
        return bytes32(_input);
    }

    // Function to transfer ownership of an asset
    function transferOwnerShip(address _oldOwner, address _newOwner, address _asset_address) public payable {
        require(msg.sender == asset_map[_asset_address].owner_address, "Only the owner can transfer ownership");

        (bool transaction_success,) = _oldOwner.call{value: asset_map[_asset_address].price}("");
        require(transaction_success, "Transfer Failed");
        
        // Update ownership
        asset_map[_asset_address].owner_address = _newOwner;

        // Emit the OwnershipTransferred event
        emit OwnershipTransferred(_oldOwner, _newOwner, _asset_address, asset_map[_asset_address].price);
    }
}
