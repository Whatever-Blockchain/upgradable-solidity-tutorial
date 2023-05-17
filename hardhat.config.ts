import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-deploy";

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  namedAccounts: {
    deployer: 0,
  },
  networks: {
    localdev: {
      url: "http://127.0.0.1:8545",
      accounts:
        process.env.LOCAL_PRIVATE_KEY !== undefined ? [process.env.LOCAL_PRIVATE_KEY] : [],
    },
  }
};

export default config;
