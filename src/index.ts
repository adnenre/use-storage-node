import StorageService from "./StorageService.js";
const storage = (cryptokey: string) => {
  return new StorageService(cryptokey);
};

export default storage;
