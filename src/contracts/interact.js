// const { Web3 } = require("web3");
// const path = require("path");
// const fs = require("fs");
const web3 = require("./web3");
const myContract = require("./myContract");

async function incrementMyNumberOnContract() {
  const accounts = await web3.eth.getAccounts();
  const defaultAccount = accounts[0];

  try {
    // Get the current value of my number
    const myNumber = await myContract.methods.myNumber().call();
    console.log("myNumber value: " + myNumber);

    // Increment my number
    const receipt = await myContract.methods
      .incrementNumber()
      .send({
        from: defaultAccount,
        gas: 1000000,
        gasPrice: "10000000000",
      });
    console.log("Transaction Hash: " + receipt.transactionHash);

    // Get the updated value of my number
    const myNumberUpdated = await myContract.methods.myNumber().call();
    console.log("myNumber updated value: " + myNumberUpdated);
  } catch (error) {
    console.error(error);
  }
}

// interact();

export default incrementMyNumberOnContract;
