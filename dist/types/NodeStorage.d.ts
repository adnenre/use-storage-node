declare class NodeStorage {
    storage: {
        [key: string]: string;
    };
    constructor();
    setItem(key: string, value: string): void;
    getItem(key: string): string;
    removeItem(key: string): {
        [key: string]: string;
    };
    clear(): void;
}
export default NodeStorage;
//# sourceMappingURL=NodeStorage.d.ts.map