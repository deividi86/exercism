var isLeapYear = function() {};

isLeapYear.prototype.leap = function(input) {
var result = false;

  if (input % 4 === 0){
      return true;
  }
  return result;
};

module.exports = isLeapYear;
