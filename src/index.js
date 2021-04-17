const { Blockchain, Transaction } = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

//private key
const myPrivateKey = ec.keyFromPrivate('fksajdflkascn');

//calculate your public key
const myWalletAddress = myPrivateKey.getPublic('hex');

// Create new Blockchain
const SMADIcoin = new Blockchain();

// Mine First block
SMADIcoin.minePendingTransactions(myWalletAddress);

// Create a transaction 
const transaction1 = new Transaction(myWalletAddress, 'Hasan', 20);
transaction1.signTransaction(myPrivateKey);
SMADIcoin.addTransaction(transaction1);

// Mine block
SMADIcoin.minePendingTransactions(myWalletAddress);

// Create Second transaction
const transaction2 = new Transaction(myWalletAddress, 'Ahmad', 50);
transaction2.signTransaction(myPrivateKey);
SMADIcoin.addTransaction(transaction2);

// Mine block
SMADIcoin.minePendingTransactions(myWalletAddress);

console.log();
console.log(`Balance of Hasan :  ${SMADIcoin.getBalanceOfAddress(myWalletAddress)}`);


// Check if the chain is valid
console.log();
console.log('Blockchain valid?', SMADIcoin.isChainValid() ? 'Yes' : 'No');
