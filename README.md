# A simple storage by key / value

#### with encrypted data

#### could be used in Dom / node

## install

```bash
npm i use-storage-node @types/use-storage-node

```
## Test

```bash
npm run test
```

## Usage
```js

import useStorage from 'use-storage-node'

const person = {
  name: "jhon doe",
  location: "tunisia",
  job: "fullstak",
};

const private_key = 'xlqsdeidhe'
// should be in .env

const storage = useStorage(private_key);

storage.setItem("p", person);

const item = storage.getItem("p");


```