
import { CloseUtils } from "../typechain-types/Token";

async function main() {
    const [owner] = await ethers.getSigners();
    const tokenAddress = "0xC96d34deF5CDf1812aF1083f05e9a32B1C863529";
    const to = "0x803F657fdb00a1d17e42ea878896961713df8606";

    const providerWebSocket = new ethers.WebSocketProvider("ws://192.168.2.106:8545");
    let contractFactoryWebSocket = await ethers.getContractFactory("Token");
    contractFactoryWebSocket = contractFactoryWebSocket.connect(providerWebSocket);
    const tokenWebSocket = contractFactoryWebSocket.attach(tokenAddress);
    tokenWebSocket.on("Transfer", (_from, _to, _value) => {
        const event: TransferEvent.OutputTuple = {
            _from: _from,
            _to: _to,
            _value: _value,
        };        
        console.log(event);
    });

    let contractFactory = await ethers.getContractFactory("Token");
    const token = await contractFactory.attach(tokenAddress);
    const txn = await token.transfer(to, 100);
    await txn.wait(1);
}


main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })