import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-etherscan'
import '@nomiclabs/hardhat-waffle'
import 'hardhat-typechain'
import 'hardhat-watcher'

import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + '/.env' });

const LOW_OPTIMIZER_COMPILER_SETTINGS = {
  version: "0.8.22",
  settings: {
    metadata: {
      bytecodeHash: "none",
    },
    optimizer: {
      enabled: true,
      runs: 100,
    },
  },
}

const LOWEST_OPTIMIZER_COMPILER_SETTINGS = {
  version: "0.8.22",
  settings: {
    metadata: {
      // Not including the metadata hash
      // https://github.com/paulrberg/solidity-template/issues/31
      bytecodeHash: "none",
    },
    optimizer: {
      enabled: true,
      runs: 100,
    },
  },
}

const DEFAULT_COMPILER_SETTINGS = {
  version: "0.8.22",
  settings: {
    metadata: {
      // Not including the metadata hash
      // https://github.com/paulrberg/solidity-template/issues/31
      bytecodeHash: "none",
    },
    optimizer: {
      enabled: true,
      runs: 1000000,
    },
  },
}

export default {
  defaultNetwork: "skale",
  networks: {
    skale: {
      url: process.env.SKALE_ENDPOINT,
      accounts: [process.env.PRIVATE_KEY!]
    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  solidity: {
    compilers: [DEFAULT_COMPILER_SETTINGS],
    overrides: {
      'contracts/NonfungiblePositionManager.sol': LOW_OPTIMIZER_COMPILER_SETTINGS,
      'contracts/test/MockTimeNonfungiblePositionManager.sol': LOW_OPTIMIZER_COMPILER_SETTINGS,
      'contracts/test/NFTDescriptorTest.sol': LOWEST_OPTIMIZER_COMPILER_SETTINGS,
      'contracts/NonfungibleTokenPositionDescriptor.sol': LOWEST_OPTIMIZER_COMPILER_SETTINGS,
      'contracts/libraries/NFTDescriptor.sol': LOWEST_OPTIMIZER_COMPILER_SETTINGS,
    },
  },
  watcher: {
    test: {
      tasks: [{ command: 'test', params: { testFiles: ['{path}'] } }],
      files: ['./test/**/*'],
      verbose: true,
    },
  },
}
