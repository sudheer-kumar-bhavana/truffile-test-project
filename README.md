# truffile-test-project

### This is a simple truffle project to deploy smart contracts to ethereum network, it uses infura API to interact with Block chain


#### step1: Create a folder truffle-test-project 
#### step2: Install Truffle and run truffle --init
```
npm install -g truffle
truffle --init
```
#### step3: Install Truffle hdwallet provider 
```
npm install @truffle/hdwallet-provider
```
#### step3: Create smart contract under contracts folder (Employees.sol)

#### step4: Add migration file under migrations folder for the smart contract created
2_Employees_migration

#### step5: Edit truffle-config.js file and add network, mnemonic, and infura api end point created for the network (you need to create this in infura website)

#### step6: Run migration
```
truffle migrate --network ropsten

```

