import StorageService from "./StorageService.js";
const useStorage = (cryptokey) => {
    return new StorageService(cryptokey);
};
export default useStorage;
