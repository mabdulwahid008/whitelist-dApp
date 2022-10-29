// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Whitelist {

    uint8 public maxWhitelistedAddresses;

    mapping(address => bool) public whitelistedAddresses;

    uint8 public numAddressesWhitelisted;

    constructor(uint8 _maxWhitelistedAddresses){
        maxWhitelistedAddresses = _maxWhitelistedAddresses;
    }

    function addAddressToWhitelist() public {
        require(!whitelistedAddresses[msg.sender], "You are alredy whitelisted");
        
        require(numAddressesWhitelisted < maxWhitelistedAddresses, "The whitlist has crossed the limit");

        whitelistedAddresses[msg.sender] = true;

        numAddressesWhitelisted += 2;
    }
}