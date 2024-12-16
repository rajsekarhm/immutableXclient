// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract Asset is ERC1155, ReentrancyGuard {
    address contractOwner;
    struct  TokenDetails{
        uint256 tokenId;
        uint256 value;
        string  tokenURI;
        bool isFungible;
        string symbol;
    }
    mapping(address => mapping(uint256 => TokenDetails)) public AssetBalances;
    mapping(address => uint256) public TokenHoldings;

    event ownerShipChangedEvent(address _oldAddress,address _newAddress, uint256 _tokenID);
    event mintedEvent(address _address, uint256 _tokenID,uint256 _amount);
    event burnedEvent(address _address, uint256 _tokenID);

    constructor(string memory _uri)ERC1155(_uri) {
        contractOwner = msg.sender;
    }

    function getContractOwnerAddressX() external view returns(address){
        return contractOwner;
    }

    function safeMintX(address contractAddress, uint256 amount,uint256 tokenId,string memory uri,string memory  _symbol) external  virtual {
        AssetBalances[contractAddress][tokenId] = TokenDetails(tokenId,amount,uri,false,_symbol);
        TokenHoldings[contractAddress] += amount;
        _mint(contractAddress,tokenId,amount,abi.encode(_symbol));
        emit mintedEvent(contractAddress,tokenId,amount);
    }

    function safeBurnX(address burnAddress, uint256 tokenId, uint256 amount) public  virtual    {
        require(balanceOf(burnAddress, tokenId) >= amount, "Insufficient balance");
        if (amount == balanceOf(burnAddress, tokenId)) {
         delete AssetBalances[burnAddress][tokenId];
         delete TokenHoldings[burnAddress];
        }
        _burn(burnAddress, tokenId, amount);
        emit burnedEvent(burnAddress, tokenId);
    }

    function getHoldingAssetX(address assetAddress, uint256 _tokenId)
    public 
    view
    returns (
        uint256 tokenId,
        uint256 value,
        string memory tokenURI,
        bool isFungible,
        string memory symbolValue
    ){
    TokenDetails memory asset = AssetBalances[assetAddress][_tokenId];
    return (asset.tokenId, asset.value, asset.tokenURI, asset.isFungible, asset.symbol);
    }

    function safeTransferOwnerShipWithEther(address from, address to, uint256 tokenId, uint256 value, bytes memory info) public {
        require(msg.sender != from, "Can't transfer to self - Failed");
        (bool status,) = from.call{value: value}(info);
        require(status, "Transfer Failed");
        safeTransferOwnerShipX(from, to, tokenId, value, info);
    }


    function safeTransferOwnerShipX(address from, address to, uint256 tokenId, uint256 value, bytes memory info) public  {
        if(transferOwnerShip(from, to, tokenId)){
            safeTransferFrom( from,  to,  tokenId,  value, abi.encode(info)); 
            emit ownerShipChangedEvent(from, to, tokenId);
        }
    }

    function transferOwnerShip(address from, address to, uint256 tokenId) internal returns(bool status) {
        require(to != address(0),"Invalid transaction");   
        TokenDetails storage newOwnerShipAsset = AssetBalances[from][tokenId];
        delete AssetBalances[from][tokenId];
        delete TokenHoldings[from];
        AssetBalances[to][tokenId] = newOwnerShipAsset;
        TokenHoldings[to] += newOwnerShipAsset.value;
        return  true;
    }

    function transfer(address _to,uint256 value,string memory info)public payable  {
        uint256 valueInWei = value * 10**18;
        require(valueInWei > 0, "Insufficient balance");
        (bool status,) = _to.call{value:valueInWei}(abi.encode(info));
        require(status, "Transfer Failed");   
    }

}