import Web3 from "web3";
import HelmiAbi from "./abi.js";


const swapHelmi = async (priv) => {
    try {
        const web3 = new Web3('https://testnet.rpc.hemi.network/rpc')
    const account = web3.eth.accounts.privateKeyToAccount(priv)
    web3.eth.accounts.wallet.add(account)

    const UniversalRouter = "0xA18019E62f266C2E17e33398448e4105324e0d0F"
    const contract = new web3.eth.Contract(HelmiAbi, UniversalRouter)
    const amount = web3.utils.toWei('0.0001', 'ether')
    const command = '0x0b00'
    const bytes = [
        "0x000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000038d7ea4c68000",
        "0x000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000038d7ea4c680000000000000000000000000000000000000000000000000000000000016d9727300000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002b0c8afd1b58aa2a5bad2414b861d8a7ff898edc3a0000643adf21a6cbc9ce6d5a3ea401e7bae9499d391298000000000000000000000000000000000000000000"
    ]
    const deadline = Math.floor(Date.now() / 1000) + 60 * 40
    const data = contract.methods.execute(command, bytes, deadline).encodeABI()
    const gasEstimate = await web3.eth.estimateGas({
        from: account.address,
        to: UniversalRouter,
        data: data
    })

    const tx = {
        from: account.address,
        to: UniversalRouter,
        data: data,
        value: amount,
        gas: gasEstimate,
        gasPrice: await web3.eth.getGasPrice()
    }

    const receipt = await web3.eth.accounts.signTransaction(tx, priv)
    const bayar = await web3.eth.sendSignedTransaction(receipt.rawTransaction)
    return bayar
    } catch (error) {
        return false
    }
}

export default swapHelmi