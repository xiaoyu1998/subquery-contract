# Dapp-contract

This project demonstrates a token contract. 

### download
```shell
git clone git@github.com:xiaoyu1998/subquery-contract.git --recursive
```

### [Run a geth node](https://github.com/xiaoyu1998/go-ethereum)


### configuration
```shell
1.testnet chainId 1998 and url as your settings
2.export ACCOUNT_KEY="privateKey for deploy contract and run scripts"
```

### deployment contract
```shell
npx hardhat run scripts/deploy.ts --network testnet
```

### deployment contract
```shell
npx hardhat run scripts/execute.ts --network testnet
```
