import Web3 from "web3";
import eduSwap from "../Abi/eduSwap.js";
const swapEdu = async (priv) => {
    try {
        const web3 = new Web3('https://open-campus-codex-sepolia.drpc.org');
        const account = web3.eth.accounts.privateKeyToAccount(priv);
        web3.eth.accounts.wallet.add(account);

        const contractAddress = '0xe745f43775B760958cd34ee83B3ab0c088F74630';
        const contract = new web3.eth.Contract(eduSwap, contractAddress);
        const amount = web3.utils.toWei('0.01', 'ether')
        
        // Ensure inputs are valid hex strings and correspond to bytes.
        const path = [
            "0xbd51800607e7c743a0e9b0d89d837058f4f42756",
            "0x90f2f4e97eb6b62d9049d07c6f6877fd171a9a0f",
            "0x7afb87ae9e37c365955012527f8a9039d6f2ca30"
        ]

        const getAmountOut = await contract.methods.getAmountsOut(amount, path).call()
        const amountOutMin = getAmountOut[getAmountOut.length - 1]


        const deadline = Math.floor(Date.now() / 1000) + 60 * 40; // Set deadline

        // Encode the ABI for the method call
        const data = contract.methods.swapExactETHForTokens(amountOutMin, path, account.address, deadline).encodeABI();
        
        // Log input for debugging
        
        // Estimate gas
        const gasEstimate = await web3.eth.estimateGas({
            from: account.address,
            to: contractAddress,
            data: data,
            value: amount
        });

        
        // Prepare the transaction object
        const tx = {
            from: account.address,
            to: contractAddress,
            value: amount,
            data: data,
            gas: gasEstimate,
            gasPrice: await web3.eth.getGasPrice()
        };


        // Sign and send the transaction
        const signedTx = await web3.eth.accounts.signTransaction(tx, priv);

        // Send the signed transaction and get receipt
        const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
        return receipt;

    } catch (error) {
        console.error("Error executing transaction:", error.message || error);
        throw error;
    }
};

export default swapEdu;
