var isLeapYear = function() {};

isLeapYear = function(input) {
var result = false;

  if (input % 4 === 0){
    if (input % 100 === 0){
      if(input % 400 === 0)
        return true;
      else
        return false;
    }
      return true;
  }
  return result;
};

module.exports = isLeapYear;
