const CustomError = require('../extensions/custom-error');

const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    if (arguments.length === 0) {
      this.arr.push('( )');
    }
    this.arr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || !Number.isInteger(position) || position > this.arr.length - 1 || position < 0) {
      this.arr = [];
      throw new Error();
    }
    this.arr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let str = this.arr.join('~~');
    this.arr = [];
    return str;
  },
};

module.exports = chainMaker;