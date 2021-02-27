const CustomError = require("../extensions/custom-error");

module.exports = function getSeason( date = null ) {
  //throw new CustomError('Not implemented');

  try {
    
    if (!(Object.prototype.toString.call(date) === "[object Date]")) throw new CustomError("Error");
    
    switch(date.getMonth()) {
      case 11:
      case 0:
      case 1:
        return 'winter';
      case 2:
      case 3:
      case 4:
        return 'spring';
      case 5:
      case 6:
      case 7:
        return 'summer';
      case 8:
      case 9: 
      case 10:
        return 'fall';
  }
  
  } catch(error) {
    if (date === null) return 'Unable to determine the time of year!';
    alert(error.message)
  }
  

};
