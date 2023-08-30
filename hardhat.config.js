require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    goerli: {
      url: 'YOUR_PROVIDER_URL', // it depends on the network that you will deploy in e.g goerli, ropsten, sepolia
      accounts: ['YOUR_PRIVATE KEY'] // the private key of your wallet 
    }
  }
};
