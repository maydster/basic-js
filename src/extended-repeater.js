const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options) {

  str = String(str);
  let line = '';

  if (typeof options['separator'] == 'undefined') options['separator'] = '+';

  if (typeof options['addition'] !== 'undefined') {

    let addition = String(options['addition']);
    let additionLine = '';
    
    additionLine += addition;

    if (typeof options['additionSeparator'] !== 'undefined') {
      
      let additionSeparator = String(options['additionSeparator']);

      for (let i = 0; i < options['additionRepeatTimes'] - 1; i++) {
        additionLine += additionSeparator + addition;
      }

    }

    line += str + additionLine;

  } else {
    line += str;
  }

  str = '' + line;
  let separator = options['separator'];

  for (let i = 0; i < options['repeatTimes'] - 1; i++) {

    str += separator + line;

  }

  return str;
};
  