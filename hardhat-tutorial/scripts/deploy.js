// const { ethers } = require("hardhat");

// async function main() {
//   // console.log(ethers);
//   const whitelistAddressContract = await ethers.getContractFactory("Whitelist");

//   const deploycontract = await whitelistAddressContract.deploy(10);

//   await deploycontract.deployed();

//   console.log('The contract address is + ' + deploycontract.address);
// }

// main()
//   .then(()=> process.exit(0))
//   .catch((err)=>{
//     console.log(err);
//     process.exit(1)
//   })

const hre = require("hardhat");

async function main() {
  const whitelistContract = await hre.ethers.getContractFactory("Whitelist");
  const deployedWhitelistContract = await whitelistContract.deploy(10);

  await deployedWhitelistContract.deployed();

  console.log("Whitelist Contract Address deployed to:", deployedWhitelistContract.address);

 await deployedWhitelistContract.numAddressesWhiteListed();
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });