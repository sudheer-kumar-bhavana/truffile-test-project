const HDWalletProvider = require("@truffle/hdwallet-provider");
//ideally mnemonic shoul be placed in some file and need to read from it and that should not be pushed to a repo
const mnemonic = "rat spawn cat test peanut flock impossible about iron build gadget supreme";
module.exports = {

  networks: {
    ropsten: {
     //with mnemonic
     provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/c71dbad206e04ad68a0c776630aed285`),
     
     //with private key
     //provider: () => new HDWalletProvider("0000000000000009d813c31e5fa1c8d32d89feaf640000000000", `https://ropsten.infura.io/v3/c71dbad206e04ad68a0c776630aed285`),
     network_id: 3,       // Ropsten's id
     gas: 5500000,        // Ropsten has a lower block limit than mainnet
     confirmations: 2,    // # of confs to wait between deployments. (default: 0)
     timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
     skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
  },

  compilers: {
    solc: {
      version: "0.8.11",    // Fetch exact version from solc-bin (default: truffle's version)
    }
  },
};
