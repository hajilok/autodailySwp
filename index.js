import dotenv from 'dotenv'
import autoSwapSonicLabs from './src/sonictestnet/swap.js'

dotenv.config()

let count = 0;
const maxCount = 3;
const resetInterval = 24 * 60 * 60 * 1000; // 24 jam dalam milidetik

const main = async (priv) => {
    if (count < maxCount) {
        try {
            const sonicLabs = await autoSwapSonicLabs(priv)
            console.log(`Success Daily Swap From ${sonicLabs.logs[0].transactionHash}`)
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
