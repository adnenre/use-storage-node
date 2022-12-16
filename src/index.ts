import StorageService from "./StorageService.js";
const useStorage = (cryptokey : string) => {
  return new StorageService(cryptokey);

};


export default useStorage;

