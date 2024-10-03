My first implementation of Smart Contract.
This website displays a button, which onClick would increment the MyNumber variable on chain.

Setup:
- Start a hardhat node `npx hardhat node`
- `npm run dev`

Smart Contract Code:
```
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0; // specifies ver of solidity compiler

contract MyContract {
	uint256 public myNumber;

	constructor(uint256 _myNumber) {
		myNumber = _myNumber;
	}

	function incrementNumber() public {
		myNumber++;
	}
}
```
