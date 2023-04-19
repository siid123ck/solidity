
// require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers/");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks:{
    goerli:{
      url:"https://eth-goerli.g.alchemy.com/v2/j7xQemxlryoLDOse2WcG3QNoxrof5q3n",
      accounts:["2950546a719d319808b3c4880d38fea4d4d1bc7d1a92f628b7bc81edeb1c2475"]
    }
  }
};
