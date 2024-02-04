// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;
contract virtualizeAsset{

    receive() external payable { }

    struct assetDetail{
        bytes32 assetUniqueId;
        uint cid;
        string assetType;
        uint securityId;
        string currentOwner;
        address assetAddress;
        address payable ownerAddress;
    }

    uint assestVirutalized;
    address payable  []  assestOwners;
    mapping (address => assetDetail) assestMap;
    struct ownerShips{
        address payable from;
        address payable  to;
    }
    mapping (bytes32 => ownerShips) assetOwnerShipHistory;

    function virtualize() public returns(bool){
        return true;
    }

    function generateUniqueID(string memory str, address addr, uint256 num) public pure returns (bytes32) {
        // Concatenate the values
        string memory concatenatedString = string(abi.encodePacked(str, toString(addr),uintToString(num)));

        // Hash the concatenated string
        bytes32 uniqueID = keccak256(abi.encodePacked(concatenatedString));

        return uniqueID;
    }

    // Helper function to convert address to string
    function toString(address x) internal pure returns (string memory) {
        bytes memory s = new bytes(40);
        for (uint i = 0; i < 20; i++) {
            bytes1 b = bytes1(uint8(uint(uint160(x)) / (2**(8*(19 - i)))));
            bytes1 hi = bytes1(uint8(b) / 16);
            bytes1 lo = bytes1(uint8(b) - 16 * uint8(hi));
            s[2*i] = char(hi);
            s[2*i + 1] = char(lo);
        }
        return string(s);
    }

    // Helper function to convert byte to char
    function char(bytes1 b) internal pure returns (bytes1 c) {
        if (uint8(b) < 10) return bytes1(uint8(b) + 0x30);
        else return bytes1(uint8(b) + 0x57);
    }


      function uintToString(uint256 num) public pure returns (string memory) {
        if (num == 0) {
            return "0";
        }

        uint256 tempNum = num;
        uint256 digits;

        while (tempNum != 0) {
            digits++;
            tempNum /= 10;
        }

        bytes memory buffer = new bytes(digits);
        while (num != 0) {
            digits--;
            buffer[digits] = bytes1(uint8(48 + num % 10));
            num /= 10;
        }

        return string(buffer);
    }


    function createVirutalAsset(uint _cid,
    string memory _assetType,
    uint _securityId,
     string memory _currentOwner,
     address _assestAddress,
     address payable  _ownerAddress 
     ) public{
        assetDetail memory newAsset = assetDetail( generateUniqueID(_currentOwner, _assestAddress, _cid),_cid,_assetType,_securityId,_currentOwner,_assestAddress,_ownerAddress);
        assestMap[_assestAddress] =  newAsset; 
        assestOwners.push(_ownerAddress);
    }

}