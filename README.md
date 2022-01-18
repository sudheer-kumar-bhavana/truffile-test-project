# truffle-test-project

### This is a simple truffle project to deploy smart contracts to ethereum network, it uses infura API to interact with Block chain


#### step 1: 
Create a folder truffle-test-project 
#### step 2:
Install Truffle and run truffle --init
```
npm install -g truffle
truffle --init
```
#### step 3: 
Install Truffle hdwallet provider 
```
npm install @truffle/hdwallet-provider
```
#### step 4: 
Create smart contract under contracts folder (Employees.sol)

#### step 5: 
Add migration file under migrations folder for the smart contract created
2_Employees_migration

#### step 6: 
Edit truffle-config.js file and add network, mnemonic, and infura api end point created for the network (you need to create this in infura website)

#### step 7: 
Run migration
```
truffle migrate --network ropsten

```

It takes some time to get the contract deployed on to block chain, once done you can check Employees.jso file under build\contracts and get contract address under "networks"
you can take this address and inspect etherscan https://ropsten.etherscan.io/

#### You can run the test cases for the contract before deploying onto mainnet or testnet
```
truffle test
```


