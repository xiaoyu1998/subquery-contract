import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
const getEnvAccount = () => {
  const { ACCOUNT_KEY } = process.env;
  if (ACCOUNT_KEY) {
    return [ACCOUNT_KEY];
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
