// Smart contract setup
const contractAddress = "0x35aF027d6d28A3f7485e32b486A4fdC5F3ba6b43"; // Your deployed contract address
const contractABI = [
    {
        "inputs": [{"internalType": "string", "name": "_house", "type": "string"}],
        "name": "setHouse",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getHouse",
        "outputs": [{"internalType": "string", "name": "", "type": "string"}],
        "stateMutability": "view",
        "type": "function"
    }
];

// Initialize Web3
let web3;
let contract;

window.onload = async () => {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);

        try {
            await ethereum.request({ method: "eth_requestAccounts" }); // Request account access
            const accounts = await web3.eth.getAccounts();
            console.log("Connected account:", accounts[0]);

            contract = new web3.eth.Contract(contractABI, contractAddress);
        } catch (error) {
            console.error("User denied account access:", error);
        }
    } else {
        alert("Please install MetaMask!");
    }
};

// Fetch current house
document.getElementById("get-house").onclick = async () => {
    try {
        const house = await contract.methods.getHouse().call();
        document.getElementById("current-house").innerText = house || "No house set";
    } catch (error) {
        console.error("Error fetching house:", error);
    }
};

// Set a new house
document.getElementById("set-house").onclick = async () => {
    const houseName = prompt("Enter new house name:");
    if (!houseName) return;

    try {
        const accounts = await web3.eth.getAccounts();
        await contract.methods.setHouse(houseName).send({ from: accounts[0] });

        alert("House updated!");
        document.getElementById("current-house").innerText = houseName;
    } catch (error) {
        console.error("Error setting house:", error);
    }
};
