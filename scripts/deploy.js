// Import Hardhat runtime environment
const hre = require("hardhat");

async function main() {
    console.log("Getting contract factory...");
    // Fetch the contract factory for "Got"
    const Got = await hre.ethers.getContractFactory("Got");

    console.log("Deploying contract...");
    // Deploy the contract with the correct constructor argument ("Got")
    const got = await Got.deploy("Got");

    console.log("Awaiting deployment...");
    // Use `waitForDeployment` instead of `deployed`
    await got.waitForDeployment();

    // Log the deployed contract address
    console.log("Contract deployed to:", got.target);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error("Error deploying contract:", error);
        process.exit(1);
    });
