//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";


interface Contract {
    function capture() external;
}

contract Ctf1 {
    address constant flagcontract = 0x93A520FDb31704837Da757235A60CbD18b381b8E;
    function mintFlag() external {
        Contract(flagcontract).capture();
    }

}
