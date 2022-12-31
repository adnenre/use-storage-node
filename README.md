 <div align="center">
 
  <h2>Javascript package use-store-node</h2>
  <blockquote>small package to store key/value with encrypted data </blockquote>


<strong>this could be used in both the browser and node.js</strong>

</div>


## 📦 Getting Started

```bash
npm i use-storage-node

```

## ⭐️ Test

```bash
npm run test
```

## Usage

```js
import storage from "use-storage-node";

const person = {
  name: "jhon doe",
  location: "tunisia",
  job: "fullstak",
};

const token = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

const private_key = "xlqsdeidhe";
// should be in .env

const store = storage(private_key);

// ADD ITEM TO STORAGE
store.setItem("person", person);
store.setItem("token", token);

// GET ITEM FROM STORAGE
const item = store.getItem("person");

// REMOVE ITEM FROM STORAGE
store.removeItem("token");

// CLEAR STORAGE
store.clear();
```

## 💎 API

### This package provides the following utility functions:

`store(cryptoKey:string) -> {}`

```js
const store = store(private_key); // returns {}
// prepare an empty object to store key/value pair
// private key used to encrypte data
// private key should be stored in .env
```

`addItem(key:string,value:any) -> undefined`

```js

store.addItem(key,value);
// store now container key / value pair with encrypted value
// value could be of any type
```

`getItem(key:string) -> value`

```js

store.getItem(key,value);
// return decrypted value
```

`removeItem(key:string) -> store`

```js

store.removeItem(key);
// store now container key / value pair with encrypted value
```

`clear() -> undefined`

```js
store.clear();
// clear all key/value pair
```

## Author
adnen rebai

## License
This package is released under the MIT license.
