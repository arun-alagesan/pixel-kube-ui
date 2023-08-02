import Cryptr from "cryptr"

export function encrypt (text){
    const secretKey = process.env.NEXTAUTH_SECRET ? process.env.NEXTAUTH_SECRET : "abc123";
    const crypt = new Cryptr(secretKey);
    const encryptedString = crypt.encrypt(text);
    return encryptedString;
}

export function decrypt (text){
    const secretKey = process.env.NEXTAUTH_SECRET ? process.env.NEXTAUTH_SECRET : "abc123";
    const crypt = new Cryptr(secretKey);
    const decryptedString = crypt.decrypt(text);
    return decryptedString;
}