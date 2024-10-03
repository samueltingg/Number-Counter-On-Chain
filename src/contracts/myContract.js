// const { Web3 } = require("web3");
// const path = require("path");
// const fs = require("fs");
const web3 = require("./web3");

// const web3 = new Web3("http://127.0.0.1:8545/");

// Read the contract address from the file system
// const deployedAddressPath = path.join(__dirname, "MyContractAddress.txt");
// const deployedAddress = fs.readFileSync(deployedAddressPath, "utf8");

const deployedAddress = '0x5fbdb2315678afecb367f032d93f642f64180aa3';

// Create a new contract object using the ABI and address
const abi = require("./MyContractAbi.json");
const myContract = new web3.eth.Contract(abi, deployedAddress);
myContract.handleRevert = true;

// export default myContract;
module.exports = myContract;
