const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let teamName = [];
  if (typeof members === 'object' && members !== null) {
    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] == 'string') {
        for (let j = 0; j < members[i].length; j++) {
          if (members[i][j] !== ' ') {
            teamName.push(members[i][j].toUpperCase());
            break;
          }
        }
        
      }
    } 
  } else return false;
  return teamName.sort().join('');
};
