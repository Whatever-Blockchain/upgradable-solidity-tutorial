import { ethers } from "hardhat";
import { HardhatRuntimeEnvironment } from "hardhat/types";

async function main() {
  //
}

async function deployGreeting(hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy, read } = hre.deployments;

  const deployment = await deploy("Greeting", { // deployment name
    contract: "Greeting", // contract name
    from: deployer,
    proxy: {
      proxyContract: "OpenZepplinTransparentProxy",
      owner: deployer,
      execute: {
        methodName: "initialize",
        args: ["Hello World!"],
      },
    },
    log: true,
  });

  // if(deployment.newlyDeployed) {
  //   await hre.run("etherscan-verify");
  // }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
