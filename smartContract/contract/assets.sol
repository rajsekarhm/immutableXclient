// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";

contract virtualizeAsset{

    receive() external payable { }

  using Strings for uint256;
    struct assetDetail{
        uint assetUniqueId;
        uint cid;
        string assetType;
        uint securityId;
        string currentOwner;
        address payable assetAddress;
        address ownerAddress;
    }

    uint assestVirutalized;
    address payable  []  assestOwners;
    mapping (address => assetDetail) assestMap;
    struct ownerShips{
        address payable from;
        address payable  to;
    }
    mapping (uint => ownerShips) assetOwnerShipHistory;

    function virtualize() public returns(bool){
        return true;
    }
}   