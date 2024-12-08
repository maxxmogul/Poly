const contractAddress = "0x35aF027d6d28A3f7485e32b486A4fdC5F3ba6b43";
const contractABI = [/* Your Contract ABI Here */];

const provider = new ethers.providers.JsonRpcProvider("https://polygon-rpc.com");
const signer = provider.getSigner();
const contract = new ethers.Contract(contractAddress, contractABI, signer);

// Example: Call a function
const house = await contract.getHouse();
console.log("Current House:", house);

