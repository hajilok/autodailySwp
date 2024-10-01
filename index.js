import dotenv from 'dotenv'
import chalk from 'chalk';
import ora from 'ora';
import autoSwapSonicLabs from './src/sonictestnet/swap.js'
import swapMinato from './src/minato/swap.js';
import swapHelmi from './src/hemi/swap.js';
import swapEdu from './src/eduChain/swap.js';
import Pumper from './src/eduChain/pumper.js';
import trusPad from './src/eduChain/trustPad.js';




dotenv.config()

let count = 0;
const maxCount = 3;
const resetInterval = 24 * 60 * 60 * 1000; // 24 jam dalam milidetik

console.log(chalk.blue(`
    _______
   /        \
  |  Daily Swap Makmum Airdrop |
   _______/
  `));
  

const main = async (priv) => {
    if (count < maxCount) {
        try {
            const sonicLabs = await autoSwapSonicLabs(priv)
            const getSwapMinato = await swapMinato(priv)
            const getSwaphemi = await swapHelmi(priv)
            const getEdu = await swapEdu(priv)
            const getPumper = await Pumper(priv)
            const  getTruspad = await trusPad(priv)
            console.log(`Success Daily Swap From Sonic Labs https://testnet.soniclabs.com/tx/${sonicLabs.logs[0].transactionHash}`)
            console.log(`Success Daily Swap From Minato https://explorer-testnet.soneium.org/tx/${getSwapMinato.receipt.logs[0].transactionHash}`)
            console.log(chalk.green(`Successfully swap from dapps https://eduswap.github.io/webapp/ , txhash :  https://opencampus-codex.blockscout.com/tx/${getEdu.logs[0].transactionHash}`));
            console.log(chalk.green(`Successfully Create Token from dapps https://www.pumper.lol/ , txhash :  https://opencampus-codex.blockscout.com/tx/${getPumper.logs[0].transactionHash}`));
            console.log(chalk.yellow(`Successfully Create Token from dapps and Lauch from https://www.thrustpad.finance/`))
            console.log(chalk.yellow(`Token Name : ${getTruspad.contractName}`))
            console.log(chalk.yellow(`Token Symbol : ${getTruspad.contractSymbol}`))
           console.log(chalk.yellow(`Token Address : ${getTruspad.contractAddress}`))
            console.log(chalk.yellow(`tx Hash : https://opencampus-codex.blockscout.com/tx/${getTruspad.receipt}`))
           if (getSwaphemi === false) {
            console.log('Error In Helmi Swap')
           } else if (getSwaphemi.logs[0].transactionHash === undefined) {
            console.log(`Error From Hemi Rpc chain`)
           } else {
            console.log(`Success Daily Swap From hemi https://testnet.explorer.hemi.xyz/tx/${getSwaphemi.logs[0].transactionHash}`)
           }
           countdown(maxCount - count);
            count++;
        } catch (error) {
            console.log(error)
        }
    } else {
        console.log("Sudah selesai daily nya nunggu reset");
        countdown(resetInterval / 1000, true);
    }

    setTimeout(() => main(priv), 60000); // Panggil lagi setelah 10 menit
}


const countdown = (time, isReset = false) => {
    const spinner = ora({
      text: chalk.cyan(`${isReset ? 'Reset in ' : 'Next run in '} ${time} seconds`),
      spinner: 'bouncingBall',
    }).start();
  
    let timer = time;
    let intervalId = setInterval(() => {
      spinner.text = chalk.cyan(`${isReset ? 'Reset in ' : 'Next run in '} ${timer} seconds`);
      timer--;
      if (timer <= 0) {
        spinner.stop();
        clearInterval(intervalId);
        if (isReset) {
          console.log(chalk.green("\nDaily sudah ready, waktunya bekerja!"));
        }
      }
    }, 1000);
  };
  
// Reset count setiap 24 jam
setInterval(() => {
    count = 0;
}, resetInterval);

const key = process.env.PRIVATE_KEY
main(key)
