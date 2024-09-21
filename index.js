import dotenv from 'dotenv'
import autoSwapSonicLabs from './src/sonictestnet/swap.js'
import swapMinato from './src/minato/swap.js';
import swapHelmi from './src/hemi/swap.js';





dotenv.config()

let count = 0;
const maxCount = 3;
const resetInterval = 24 * 60 * 60 * 1000; // 24 jam dalam milidetik

const main = async (priv) => {
    if (count < maxCount) {
        try {
            const sonicLabs = await autoSwapSonicLabs(priv)
            const getSwapMinato = await swapMinato(priv)
            const getSwaphemi = await swapHelmi(priv)
            console.log(`Success Daily Swap From Sonic Labs https://testnet.soniclabs.com/tx/${sonicLabs.logs[0].transactionHash}`)
            console.log(`Success Daily Swap From Minato https://explorer-testnet.soneium.org/tx/${getSwapMinato.receipt.logs[0].transactionHash}`)
           if (getSwaphemi === false) {
            console.log('Error In Helmi Swap')
           } else if (getSwaphemi.logs[0].transactionHash === undefined) {
            console.log(`Error From Hemi Rpc chain`)
           } else {
            console.log(`Success Daily Swap From hemi https://testnet.explorer.hemi.xyz/tx/${getSwaphemi.logs[0].transactionHash}`)
           }

            count++;
        } catch (error) {
            console.log(error)
        }
    } else {
        console.log("Sudah selesai daily nya nunggu reset");
    }
    


    setTimeout(() => main(priv), 60000); // Panggil lagi setelah 10 menit
}

// Reset count setiap 24 jam
setInterval(() => {
    count = 0;
    console.log("Daily sudah ready Waktunya bekerja");
}, resetInterval);

const key = process.env.PRIVATE_KEY
main(key)
