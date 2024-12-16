// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
 contract CustomToken is ERC20 {
    address   _owner;
    address public _contractAddress;
    string _symbol;
    string _name;
    uint8 _decimals;
    uint _totalSupply;
    event tokenCreation(string _symbol,string _name,address indexed  owner);
    event minted(address indexed  to, uint amount);
    event burned(address indexed  to, uint amount);

    receive() external payable { }
    fallback() external payable { }
    
    constructor(string memory name, string memory symbol) ERC20(name, symbol) {
        _owner = msg.sender;
        _contractAddress = address(0);
        emit  tokenCreation( symbol, name, _owner);
    }
    modifier onlyOwner {
        require(msg.sender ==_owner, "Ownable: caller is not");
        _;
    }

    function mint(address to, uint256 amount) external  {
        _totalSupply = 1_000_000_000_000_000_000_000_000;
        uint toMint = _totalSupply*amount;
        _mint(to,toMint);
        emit minted(to, toMint);
    }

    function burn(uint256 amount) external {
        _burn(msg.sender, amount);
        emit  burned(msg.sender, amount);
    }

    function getContractOwner() view  external  returns(address owner){
        return  _owner;
    }
    function getContractAddress( ) view  external  returns (address contractAdrress){
        return  _contractAddress;
    }
}
