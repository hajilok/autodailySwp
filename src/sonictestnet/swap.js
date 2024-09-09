import Web3 from "web3";

const autoSwapSonicLabs = async (priv) => {
    const web3 = new Web3('https://rpc.testnet.soniclabs.com') 
    const account = web3.eth.accounts.privateKeyToAccount(priv)
    web3.eth.accounts.wallet.add(account)

    const contract = "0x086d426f8b653b88a2d6d03051c8b4ab8783be2b"
    const data = '0xddba27a700000000000000000000000000000000000000000000000000005af3107a4000000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000002000000000000000000000000af93888cbd250300470a1618206e036e1147014900000000000000000000000030bf3761147ef0c86e2f84c3784fbd89e79546700000000000000000000000000000000000000000000000000000000000000001000000000000000000000000908562f2aca4d9bd0370fc7bd0d2fdf59395082c'

    const gasEstimate = await web3.eth.estimateGas({
        from: account.address,
        to: contract,
        data:data
    })

    const tx = {
        from: account.address,
        to: contract,
        data: data,
        gas: gasEstimate,
        gasPrice: await web3.eth.getGasPrice()
    }

    const getReceipt = await web3.eth.accounts.signTransaction(tx, priv)
    const bayar = await web3.eth.sendSignedTransaction(getReceipt.rawTransaction)
    return bayar
}


export default autoSwapSonicLabs