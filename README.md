<div align="center">
<a href="https://github.com/hasanahmadl/Cryptocurrency/edit/master" rel="SMADI coin">
<img width=300px height=300px src="SMADIcoin.jpeg" alt="logo"></a>
</div>

<h3 align="center">SMADI Coin</h3>

## Features

* Simple Blockchain
* Proof-of-work
* Generate wallet
* Signature transactions

### Getting Started :
```
cd SMADIcoin
```
### Install Library :
```
npm install --save
```
### Run Blockchain :
```
npm start
```
### More accurately :
<br />

### Generate a keypair :
The public key becomes your wallet address and the private key is used to sign transactions.
```js
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const key = ec.genKeyPair();
```
The `Key` now contains your public and private key:

```js
console.log('Public key:', myKey.getPublic('hex'));
console.log('Private key:', myKey.getPrivate('hex'));
```

### Create a Blockchain :
Now you can create a new instance of a Blockchain:

```js
const {Blockchain, Transaction} = require('SMADIcoin');

const blockchain = new Blockchain();
```

### Add transactions :
```js
const transaction = new Transaction(key.getPublic('hex'), 'toAddress', 100);
transaction.signTransaction(key);

myChain.addTransaction(transaction);
```

We have to mine a new block. We give mining reward :

```js
blockchain.minePendingTransactions(key.getPublic('hex'));
```

