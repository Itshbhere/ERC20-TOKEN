require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ignition");
require('dotenv').config();
console.log(`INFURA_PROJECT_ID: ${process.env.INFURA_PROJECT_ID}`);
console.log(`PRIVATE_KEY: ${process.env.PRIVATE_KEY}`);
console.log(`ETHERSCAN_API_KEY: ${process.env.ETHERSCAN_API_KEY}`);


module.exports = {

    paths: {
        // Correct the module path here
        modules: "ignition/modules"
      },
      
    solidity: {
        version: "0.8.24",
        settings: {
            optimizer: {
                enabled: true,
                runs: 200,
            },
        },
    },
    networks: {
        hardhat: {
            chainId: 1337,
        },
        localhost: {
            url: "http://127.0.0.1:8545",
            chainId: 1337,
        },
        sepolia: {
            url: `https://sepolia.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
            accounts: [`0x${process.env.PRIVATE_KEY}`],
            chainId: 11155111,
        },
    },
    etherscan: {
        apiKey: process.env.ETHERSCAN_API_KEY,
    },
};
