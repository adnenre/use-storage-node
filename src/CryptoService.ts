
import CryptoJS from "crypto-js";

class CryptoService {
    #cryptKey : string;
    constructor(cryptKey:string){
        this.#cryptKey = cryptKey;
    }
    /**
     * ENCRYPT DATA
     * @param {DATA} - string 
     * @returns encrypted string
     */
    encrypt(data:any){
       return  CryptoJS.AES.encrypt(JSON.stringify(data),  this.#cryptKey).toString();
    }
     /**
     * DECRYPT DATA
     * @param {DATA} - encrypted string 
     * @returns decrypted string
     */
    decrypt(data:string){
        const bytes = CryptoJS.AES.decrypt(data,  this.#cryptKey);
        const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    
        return decryptedData
    }
}


export default CryptoService;
