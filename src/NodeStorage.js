class NodeStorage {
    constructor() {
        this.storage = {};
    }
    setItem(key, value) {
        this.storage[key] = value;
    }
    getItem(key) {
        return this.storage[key];
    }
    removeItem(key) {
        delete this.storage[key];
        return this.storage;
    }
    clear() {
        this.storage = {};
    }
}
export default NodeStorage;
