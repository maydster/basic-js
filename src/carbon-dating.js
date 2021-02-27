const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const RATE_CONSANT= 0.693 / 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity === 'string' && sampleActivity > 0 && sampleActivity <= 15) {
    sampleActivity = Number(sampleActivity);
    let elapsedTime = Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity)/RATE_CONSANT);
    return elapsedTime;
  } else return false;  
};
