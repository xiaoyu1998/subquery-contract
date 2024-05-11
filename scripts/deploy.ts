

async function main() {
    //const [owner] = await ethers.getSigners();

    let contractFactory = await ethers.getContractFactory("Token");
    let token = await contractFactory.deploy();
    await token.waitForDeployment();

    console.log("Token", token.target)
}


main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })