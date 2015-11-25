//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
input = input.replace(/, /g,'');

  if(input.trim() === ""){
    return 'Fine. Be that way!'
  }
  else if(input === input.toUpperCase() && isNaN(input)){
    if((input.slice(-1) === "?")){
      input = input.replace("?","");
      if(!isNaN(input)){
        return 'Sure.'
      }
    }
    return "Whoa, chill out!"
  }
  else if (input.slice(-1) === "?"){
    if (input === input.toUpperCase()){
      return "Whoa, chill out!"
    }
    return "Sure."
  }

  else {
    return "Whatever."
  }
  };

module.exports = Bob;
