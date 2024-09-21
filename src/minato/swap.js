import Web3 from "web3";
import abi from "./abi.js";


const swapMinato = async (priv) => {
   const web3 = new Web3('https://rpc.minato.soneium.org'); // Pastikan Anda menggunakan node RPC yang benar
   const account = web3.eth.accounts.privateKeyToAccount(priv);
   web3.eth.accounts.wallet.add(account);

   const contract = '0x48630d9914a9f87a485abe0779caa9e58ff0f604'; // Kontrak Uniswap Router
   const getMethods = new web3.eth.Contract(abi, contract);
   const amount =  web3.utils.toWei('0.0000001', 'ether'); // Nilai yang akan ditukar
   const deadline = Math.floor(Date.now() / 1000) + 60 * 40; // Batas waktu transaksi
   const path = [
    "0x4200000000000000000000000000000000000006",
    "0x9ec73f6d9312e8518139b71de175aa6e590a1dbb"
]

   try {
      // Mendapatkan estimasi jumlah token yang akan diterima
      const getAmount = await getMethods.methods.getAmountsOut(amount, path).call();
      const isAmount = getAmount[1]; // Ambil token terakhir di jalur swap (USDC atau token lainnya)

      // Encode ABI untuk swapExactETHForTokens
      const data = getMethods.methods.swapExactETHForTokens(isAmount, path, account.address, deadline).encodeABI();

      // Estimasi gas untuk transaksi
      const gasEstimate = await web3.eth.estimateGas({
         from: account.address,
         to: contract,
         data: data,
         value: amount // Nilai ETH yang dikirim untuk swap
      });

      // Menyiapkan transaksi
      const tx = {
         from: account.address,
         to: contract,
         data: data,
         value: amount, // Kirim ETH dalam transaksi
         nonce: await web3.eth.getTransactionCount(account.address),
         gas: gasEstimate, // Perbaiki nama properti gasEstimate menjadi gas
         gasPrice: await web3.eth.getGasPrice()
      };

      // Menandatangani transaksi
      const signedTx = await web3.eth.accounts.signTransaction(tx, priv);

      // Mengirim transaksi
      const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
      return {
         receipt: receipt,
         getAmount: isAmount
      }
   } catch (error) {
      console.error('Error:', error);
      throw error;
   }
};

export default swapMinato;
