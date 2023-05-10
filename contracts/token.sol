// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
    address private _owner;
    uint256 private _maxSupply;

    constructor(string memory name, string memory symbol, uint256 maxSupply, address owner) ERC20(name, symbol) {
        _owner = owner;
        _maxSupply = maxSupply;
    }

    function mint(address to, uint256 amount) public {
        require(msg.sender == _owner, "Only the owner can mint new tokens");
        require(totalSupply() + amount <= _maxSupply, "Max supply exceeded");
        _mint(to, amount);
    }

    function initialize(uint256 initialSupply, address to) public {
        require(totalSupply() == 0, "Token already initialized");
        require(initialSupply > 0 && initialSupply <= _maxSupply, "Invalid initial supply");
        _mint(to, initialSupply);
    }
}
