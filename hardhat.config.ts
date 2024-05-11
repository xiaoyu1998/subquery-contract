import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from 'dotenv';
import path from 'path';
const mode = process.env.NODE_ENV || 'production';
// Load the appropriate .env file
const dotenvPath = path.resolve(process.cwd(), `.env${mode !== 'production' ? `.${mode}` : ''}`);
dotenv.config({ path: dotenvPath });

const getEnvAccount = () => {
  const accounts = process.env.ACCOUNT_KEY!?.split(',') as string[];
  if (accounts) {
    return accounts;
  }
  return [];
};

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks:{
    testnet: {
      url: "http://192.168.2.106:8545",//geth
      chainId: 1998,
      accounts: getEnvAccount(),
      blockGasLimit: 20_000_000,
      gas: 20_000_000,
    },
  }
};

export default config;
