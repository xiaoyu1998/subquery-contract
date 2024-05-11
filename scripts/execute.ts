
import { CloseUtils } from "../typechain-types/Token";

async function main() {
    const [owner, to] = await ethers.getSigners();
    const tokenAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"

    const providerWebSocket = new ethers.WebSocketProvider("ws://127.0.0.1:8545");
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
    await token.transfer(to, 100);
}


main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })