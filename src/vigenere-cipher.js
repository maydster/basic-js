const CustomError = require('../extensions/custom-error');

class VigenereCipheringMachine {
  constructor(arg) {
    this.isDirectMachine = arg;
    this.arrayEn = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  }
  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Arguments Error');
    }

    this.message = message.toUpperCase();
    this.letters = this.message.match(/[A-Z]/g);

    if (this.letters === null) return this.message;

    this.letters = this.letters.join('');
    this.key = key.toUpperCase();
    this.key = this.key.repeat(Math.ceil(this.letters.length / this.key.length)).slice(0, this.lengthOfLetters);
    this.encryptLetters = [];

    for (let i = 0; i < this.letters.length; i++) {
      let indexOfLetter = this.arrayEn.indexOf(this.letters[i]);
      let indexOfKey = this.arrayEn.indexOf(this.key[i]);
      let indexOfEncryptLetter = (indexOfLetter + indexOfKey) % this.arrayEn.length;
      this.encryptLetters.push(this.arrayEn[indexOfEncryptLetter]);
    }

    if (this.isDirectMachine === false) {
      this.encryptLetters.reverse();
    }

    this.encryptMessage = this.message.split('');

    let count = 0;
    for (let i = 0; i < this.message.length; i++) {
      let regexp = /[A-Z]/;

      if (!regexp.test(this.message[i])) {
        count++;
        continue;
      } else {
        this.encryptMessage.splice(i, 1, this.encryptLetters[i - count]);
      }
    }

    return (this.encryptMessage = this.encryptMessage.join(''));
  }
  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      throw new Error('Arguments Error');
    }

    this.encryptedMessage = encryptedMessage.toUpperCase();
    this.letters = this.encryptedMessage.match(/[A-Z]/g);

    if (this.letters === null) {
      return this.encryptedMessage;
    }

    this.letters = this.letters.join('');
    this.key = key.toUpperCase();
    this.key = this.key.repeat(Math.ceil(this.letters.length / this.key.length)).slice(0, this.lengthOfLetters);
    this.decryptLetters = [];

    for (let i = 0; i < this.letters.length; i++) {
      let indexOfLetter = this.arrayEn.indexOf(this.letters[i]);
      let indexOfKey = this.arrayEn.indexOf(this.key[i]);
      let indexOfDecryptLetters;

      if (indexOfLetter >= indexOfKey) {
        indexOfDecryptLetters = indexOfLetter - indexOfKey;
      } else {
        indexOfDecryptLetters = indexOfLetter - indexOfKey + this.arrayEn.length;
      }

      this.decryptLetters.push(this.arrayEn[indexOfDecryptLetters]);
    }

    if (this.isDirectMachine === false) {
      this.decryptLetters.reverse();
    }

    this.decryptMessage = this.encryptedMessage.split('');

    let count = 0;
    for (let i = 0; i < this.encryptedMessage.length; i++) {
      let regexp = /[A-Z]/;

      if (!regexp.test(this.encryptedMessage[i])) {
        count++;
        continue;
      } else {
        this.decryptMessage.splice(i, 1, this.decryptLetters[i - count]);
      }
    }

    return (this.decryptMessage = this.decryptMessage.join(''));
  }
}

module.exports = VigenereCipheringMachine;