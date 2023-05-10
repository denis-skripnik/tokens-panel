// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./token.sol";

contract TokenFactory {
    event TokenCreated(address indexed owner, address tokenAddress);

    function createToken(string memory name, string memory symbol, uint256 initialSupply, uint256 maxSupply) public payable {
        Token token = new Token(name, symbol, maxSupply, msg.sender);
        token.initialize(initialSupply, msg.sender);
        emit TokenCreated(msg.sender, address(token));
    }
}
