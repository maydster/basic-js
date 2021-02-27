const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let hanoiResult = { turns: 0, seconds: 0};
  hanoiResult['turns'] = (2**disksNumber)-1;
  let turns = hanoiResult['turns'];
  hanoiResult['seconds'] = Math.floor(turns/(turnsSpeed/3600));
  return hanoiResult;
};
