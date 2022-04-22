//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Faucet {
    address public owner;

    mapping (address => bool) public hasWithdrawn;

    constructor() payable { 
        owner = msg.sender;
    }

    function withdraw (uint _amount) public {
        require(_amount <= 10000000000);
        require(!hasWithdrawn[msg.sender]);
        payable(msg.sender).transfer(_amount);
        hasWithdrawn[msg.sender] = true;
    }

    function destroyFaucet() external {
        require(msg.sender == owner);
        selfdestruct(payable(owner));
    }
}