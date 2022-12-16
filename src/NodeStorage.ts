class NodeStorage {
  storage: { [key: string]: string };
  constructor() {
    this.storage = {};
  }
  setItem(key: string, value: string) {
    this.storage[key] = value;
  }
  getItem(key: string) {
    return this.storage[key];
  }
  removeItem(key: string) {
    delete this.storage[key];
    return this.storage;
  }
  clear() {
    this.storage = {};
  }
}

export default NodeStorage;
