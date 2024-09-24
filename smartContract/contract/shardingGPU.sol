// SPDX-License-Identifier: GPL-3.0


// contract unused

pragma solidity >=0.8.2 <0.9.0;

import './dateTime.sol';

contract shardAssest{
    address payable  admin;
     uint256 intrestRate;
     struct  stakingDetails{
        bool isStake;
        uint amountStored;
        uint256 timeStamp;
     } 
     struct gpuShardDetails{
         stakingDetails stakeDetails;
         string IPFS_Hash;
         string ContentID;
         bool  isSharedApproved;
     }

     mapping (address => gpuShardDetails) $GPU;
     mapping (address => stakingDetails) stakers;
     address payable [] _holder;
    constructor (){
        admin = payable(msg.sender);
    }


    modifier  doneByAdmin(){
        require(msg.sender == admin, "You Don't Access do This :(");
        _;
    }

    function setIntrest(uint256 _currentrate) private returns(uint256){
        intrestRate = _currentrate;
    }

    function getIntrest() public view returns(uint256) {
        return intrestRate;
    }

    function needToStake(bool _stake, uint amt)public{
        stakers[msg.sender] = stakingDetails(_stake,amt,getCurrentTimestamp());
        $GPU[msg.sender].stakeDetails = stakers[msg.sender];
        $GPU[msg.sender].IPFS_Hash = "";
        $GPU[msg.sender].ContentID = "";
        _holder.push(payable (msg.sender)); 
    }

    function getCurrentTimestamp() public view returns (uint256) {
        return block.timestamp;
    }

    function getrewardedTime() public {
        DateTime _now = new DateTime();
        // offChain transaction
    }

    function waitingForApproval() public  pure returns(bool){
        return true;
    }

    function shareGPU(string memory ipfsHash, string memory cid) public {
        $GPU[msg.sender].IPFS_Hash = ipfsHash; 
        $GPU[msg.sender].ContentID = cid;
        $GPU[msg.sender].isSharedApproved = false;

    }

    function waitForGPUApproval(address  toApprove) public doneByAdmin {
        require(toApprove == address(0),"Invalid Address");
        require( ! $GPU[toApprove].isSharedApproved,"Already Approved");
        $GPU[toApprove].isSharedApproved = true;
    }
    
}