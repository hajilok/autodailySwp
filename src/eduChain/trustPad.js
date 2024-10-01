import Web3 from "web3";
import { faker } from '@faker-js/faker'
import abiTrust from "../Abi/abiTrus.js";
import truspadLAuch from "../Abi/truspadLauch.js";

const now = new Date();

// Mengonversi ke Unix timestamp (dalam detik)
const unixTimestampNow = Math.floor(now.getTime() / 1000);

// Membuat tanggal dan jam satu jam setelahnya
const oneHourLater = new Date(now.getTime() + 60 * 60 * 1000);

// Mengonversi ke Unix timestamp (dalam detik)
const unixTimestampOneHourLater = Math.floor(oneHourLater.getTime() / 1000);

// Array of sample names, symbols, and descriptions
function generateRandomDetails() {
    const name = faker.word.words();   // Generates a random company name for the token name
    const symbol = faker.hacker.verb(); // Generates a random 3-letter symbol
    const description = faker.lorem.sentence(); // Generates a random description

    return {
        name: name,
        symbol: symbol,
        description: description
    };
}
// Generate and log the random details



const trusPad =  async (privateKey) => {
    const web3 = new Web3('https://open-campus-codex-sepolia.drpc.org')
    const account = web3.eth.accounts.privateKeyToAccount(privateKey)
    web3.eth.accounts.wallet.add(account)
    const randomDetails = generateRandomDetails()
    const generatedToken = async (priv, nameToken, SymbolToken) => {
      try {
      const contractAddress = '0xF6Ece2d79947f1E2f13617f8Ed4041468C3aCBCc'
      const contract =  new web3.eth.Contract(abiTrust, contractAddress); 
      const name = nameToken
      const symbol = SymbolToken
      const decimals = 18
      const suplay = 100000000000
      const data =  contract.methods.newToken(name, symbol, decimals, suplay, [ true, false, false]).encodeABI()

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
        gasPrice: await web3.eth.getGasPrice(),
     }

      const trx =  await web3.eth.accounts.signTransaction(tx, priv)
      const receipt = await web3.eth.sendSignedTransaction(trx.rawTransaction)
      return receipt.logs[0].address
      } catch (error) {
        return error
      }

    }
    const name  = randomDetails.name
    const symbol = randomDetails.symbol

    const approveToken = async (priv, name, symbol) => {
        try {
            const getCa = await generatedToken(priv, name, symbol)
        const contractAdd = getCa
        const data = '0x095ea7b3000000000000000000000000ab1eee87c843d38ab7cc4a26383000b2919981300000000000000000000000000000000000000001431e0fae6d7217caa0000000'
        const gasEstimate = await web3.eth.estimateGas({
            from: account.address,
            to: contractAdd,
           data: data
         })
  
       const tx = {
          from: account.address,
          to: contractAdd,
          data: data,
          gas: gasEstimate,
          gasPrice: await web3.eth.getGasPrice(),
       }
  
        const trx =  await web3.eth.accounts.signTransaction(tx, priv)
         await web3.eth.sendSignedTransaction(trx.rawTransaction)
         return contractAdd
        } catch (error) {
            return error
        }
    }
    const getApprove = await approveToken(privateKey, name, symbol)
    const contractLauch = '0xAB1Eee87C843D38ab7CC4a26383000b291998130'
    const contract =  new web3.eth.Contract(truspadLAuch, contractLauch)
    const config = [
        getApprove,
        "100000000000000000000",
        "200000000000000000000",
        "100000000000000000000000000",
        "10000000000000000000",
        "30000000000000000",
        "99990000000000000000",
        "60",
        "40",
        unixTimestampOneHourLater,
        unixTimestampNow,
    ]
    const data =  contract.methods.newFairLaunch(config).encodeABI()
    const gasEstimate = await web3.eth.estimateGas({
        from: account.address,
        to: contractLauch,
       data: data
     })

   const tx = {
      from: account.address,
      to: contractLauch,
      data: data,
      gas: gasEstimate,
      gasPrice: await web3.eth.getGasPrice(),
   }

    const trx =  await web3.eth.accounts.signTransaction(tx, privateKey)
    const receipt = await web3.eth.sendSignedTransaction(trx.rawTransaction)
    const detail = {
        contractName: name,
        contractSymbol: symbol,
        contractAddress: getApprove,
        receipt: receipt.logs[0].transactionHash
    }
    return detail

}

export default trusPad