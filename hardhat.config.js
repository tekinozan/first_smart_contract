//https://eth-goerli.g.alchemy.com/v2/hP9NsBBeMHTHBtaqb59BhOCpNsIPIosJ

require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/hP9NsBBeMHTHBtaqb59BhOCpNsIPIosJ',
      accounts: ['ca6330e4e2cdab24277d69852dd84fffa558b21f12a08e9eff1e6a4bf7d19deb']
    }
  }
};
