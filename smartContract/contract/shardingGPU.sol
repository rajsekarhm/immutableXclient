// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

import './dateTime.sol';

contract shardAssest{
    address payable  admin;
     uint256 intrestRate;
     struct  stakingDetails{
        bool isStake;
        uint Amtstaked;
        uint256 timeStamp;
     } 
     struct _gpuShared{
         stakingDetails _gpuStake;
         uint256 hashPower;
         string _CID;
     }

     mapping (address => _gpuShared) $GPU;
     mapping (address => stakingDetails) stakers;
     address payable [] _holder;
    constructor (){
        admin = payable(msg.sender);
    }

    function setIntrest(uint256 _currentrate) private returns(uint256){
        intrestRate = _currentrate;
    }

    function getIntrest() public view returns(uint256) {
        return intrestRate;
    }

    function needToStake(bool _stake, uint amt)public{
        stakers[msg.sender] = stakingDetails(_stake,amt,getCurrentTimestamp());
        _holder.push(payable (msg.sender)); 
    }

    function getCurrentTimestamp() public view returns (uint256) {
        return block.timestamp;
    }

    function getrewardedTime() public {
        DateTime _now = new DateTime();
        // offChain transaction
    }

    function waitingForApproval() public returns(bool){
        return true;
    }

    function shareGPU() public {
    }

    function waitForGPUApproval() public {

    }
    
}