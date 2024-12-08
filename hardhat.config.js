require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

console.log("Private Key:", process.env.PRIVATE_KEY);

module.exports = {
    solidity: {
        compilers: [
            { version: "0.8.18" }, // Compiler version for Got.sol
        ],
    },
    networks: {
        hardhat: {},
        polygon_mainnet: {
            url: "https://polygon-rpc.com",
            chainId: 137,
            accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
        },
    },
    etherscan: {
        apiKey: {
            polygon: process.env.POLYGONSCAN_API_KEY, // Add your Polygonscan API key here
        },
    },
};

console.log("Private Key:", process.env.PRIVATE_KEY);
