var phone = function(input) {
  this.input = input;
};

phone.prototype.number = function() {
  var invalidNumber = '0000000000'
  var clearString = this.input.replace(/\D/g, '');

  if(clearString.length === 11 && clearString.substring(0,1) === '1'){
    return clearString.substring(1,11);
  } else if (clearString.length === 10) {
    return clearString;
  } else {
    return invalidNumber;
  }
};

phone.prototype.areaCode = function() {
  return this.input.substring(0,3);
};

phone.prototype.toString = function() {
  return "(" + this.input.substring(0,3) + ") " + this.input.substring(3,6) + "-" + this.input.substring(6,10);
};

module.exports = phone;
