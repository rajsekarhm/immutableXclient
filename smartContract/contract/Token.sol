pragma solidity >=0.8.2 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract createToken is ERC20{
    address  _owner;
    event contractCreated(address payable);
    event ownershipChanged(address payable);

    modifier _validateByOwner(){
        require(payable(msg.sender) == _owner,"Invaild Transaction ..");
        _;
    }
    constructor(string memory _name, string memory _symbol, address _owner_address) ERC20(_name, _symbol){
        _owner = _owner_address;
        _mint(payable(_owner), 1000);
        emit contractCreated(payable (_owner));
    }    

    function changeOwnership(address payable newOwner) public _validateByOwner() returns(bool){
        _owner = newOwner ;
        emit ownershipChanged(newOwner);
        return true;
    }

    function getOwner() public view returns (address){
        return  _owner;
    }
}
