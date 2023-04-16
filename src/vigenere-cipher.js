const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // convert message and key to uppercase
    message = message.toUpperCase();
    key = key.toUpperCase();

    let result = "";

    for (let i = 0, j = 0; i < message.length; i++) {
      const letter = message[i];

      // ignore non-alphabetic characters
      if (!alphabet.includes(letter)) {
        result += letter;
        continue;
      }

      const keyLetter = key[j % key.length];
      const keyIndex = alphabet.indexOf(keyLetter);

      const shift = alphabet.indexOf(letter) + keyIndex;
      const encodedLetter = alphabet[shift % alphabet.length];

      result += encodedLetter;
      j++;
    }

    return this.isDirect ? result : result.split("").reverse().join("");
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error("Incorrect arguments!");
    }

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // convert encryptedMessage and key to uppercase
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let result = "";

    for (let i = 0, j = 0; i < encryptedMessage.length; i++) {
      const letter = encryptedMessage[i];

      // ignore non-alphabetic characters
      if (!alphabet.includes(letter)) {
        result += letter;
        continue;
      }

      const keyLetter = key[j % key.length];
      const keyIndex = alphabet.indexOf(keyLetter);

      const shift = alphabet.indexOf(letter) - keyIndex;
      const decodedLetter =
        alphabet[(shift + alphabet.length) % alphabet.length];

      result += decodedLetter;
      j++;
    }

    return this.isDirect ? result : result.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
