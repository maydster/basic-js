const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
  
  if (!Array.isArray(arr)) {
    throw new Error();
  }
  let result = arr.slice();
  for (let i = 0; i < result.length; i++) {
    switch (result[i]) {
      case '--discard-next':
        if (i === result.length - 1) {
          result.splice(i, 1);
          break;
        }
        if (result[i + 2] === '--discard-prev' || result[i + 2] === '--double-prev') {
          result.splice(i, 3);
          break;
        }
        result.splice(i, 2);
        i = i - 1;
        break;
      case '--discard-prev':
        if (i === 0) {
          result.splice(i, 1);
          break;
        }
        result.splice(i - 1, 2);
        i = i - 1;
        break;
      case '--double-next':
        if (i === result.length - 1) {
          result.splice(i, 1);
          break;
        }
        result.splice(i, 1, result[i + 1]);
        break;
      case '--double-prev':
        if (i === 0) {
          result.splice(i, 1);
          break;
        }
        result.splice(i, 1, result[i - 1]);
        break;
    }
  }
  return result;

};
