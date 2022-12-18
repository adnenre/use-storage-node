 <div align="center">
 
  <h2>Javascript package use-storage-node</h2>
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
import useStorage from "use-storage-node";

const person = {
  name: "jhon doe",
  location: "tunisia",
  job: "fullstak",
};

const token = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

const private_key = "xlqsdeidhe";
// should be in .env

const storage = useStorage(private_key);

// ADD ITEM TO STORAGE
storage.setItem("person", person);
storage.setItem("token", token);

// GET ITEM FROM STORAGE
const item = storage.getItem("person");

// REMOVE ITEM FROM STORAGE
storage.removeItem("token");

// CLEAR STORAGE
storage.clear();
```

## 💎 API

### This package provides the following utility functions:

`useStorage(cryptoKey:string) -> {}`

```js
const storage = useStorage(private_key); // returns {}
// prepare an empty object to store key/value pair
// private key used to encrypte data
// private key should be stored in .env
```

`addItem(key:string,value:any) -> undefined`

```js

storage.addItem(key,value);
// storage now container key / value pair with encrypted value
// value could be of any type
```

`getItem(key:string) -> value`

```js

storage.getItem(key,value);
// return decrypted value
```

`removeItem(key:string) -> storage`

```js

storage.removeItem(key);
// storage now container key / value pair with encrypted value
```

`clear() -> undefined`

```js
storage.clear();
// clear all key/value pair
```

## Author
adnen rebai

## License
This package is released under the MIT license.
