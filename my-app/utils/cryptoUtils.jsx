import CryptoJS from "react-native-crypto-js";

const SECRET_KEY = "djkalljaouoi32890396geh"; 

// Encrypt function
export const encryptData = (plaintext) => {
  if (!plaintext) return null;
  return CryptoJS.AES.encrypt(plaintext, SECRET_KEY).toString();
};

// Decrypt function
export const decryptData = (ciphertext) => {
  if (!ciphertext) return null;
  const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET_KEY);
  return bytes.toString(CryptoJS.enc.Utf8);
};