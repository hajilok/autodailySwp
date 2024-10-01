import Web3 from "web3";
import pumperAbi from "../Abi/pumper.js";

// Array of sample names, symbols, and descriptions
const names = ["Alpha", "Beta", "Gamma", "Delta", "Epsilon"];
const symbols = ["ALP", "BET", "GAM", "DEL", "EPS"];
const descriptions = [
    "A pioneering project in blockchain technology.",
    "A revolutionary new token for decentralized finance.",
    "An innovative solution for secure transactions.",
    "A cutting-edge platform for smart contracts.",
    "A next-generation cryptocurrency for global payments."
];

// Function to generate a random index
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

// Function to generate random name, symbol, and description
function generateRandomDetails() {
    const name = names[getRandomIndex(names)];
    const symbol = symbols[getRandomIndex(symbols)];
    const description = descriptions[getRandomIndex(descriptions)];

    return {
        name: name,
        symbol: symbol,
        description: description
    };
}




const Pumper = async  (privateKey) => {
   try {
    const randomDetails = generateRandomDetails();
    const web3 = new Web3('https://open-campus-codex-sepolia.drpc.org')
    const account = web3.eth.accounts.privateKeyToAccount(privateKey)
    web3.eth.accounts.wallet.add(account)
    const contractAddress = '0xA612ab0e8C9381e956459989f246DC760e0b28E3'
    const contract = new web3.eth.Contract(pumperAbi,  contractAddress)
    const data = contract.methods.createPumpToken(randomDetails.name, randomDetails.symbol).encodeABI()
    const gasEstimate = await web3.eth.estimateGas({
        from: account.address,
        to: contractAddress,
        data: data
    })

    const tx = {
        from: account.address,
        to: contractAddress,
        data: data,
        gas: gasEstimate,
        gasPrice: await web3.eth.getGasPrice()
    }

    const trx =  await web3.eth.accounts.signTransaction(tx, privateKey)
    const receipt = await web3.eth.sendSignedTransaction(trx.rawTransaction)
    return receipt
   } catch (error) {
    return  error.message

   }
}

export default  Pumper;

