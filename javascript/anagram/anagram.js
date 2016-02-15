var subject = function(input) {
  this.input = input;
};

subject.prototype.matches = function(arrayToMatch) {
  var result = [];
  var original = this.input.split('');
  var originalArray = original.sort();

  var wordArray = [];
  var eachWord = null;

  for(i=0;i< arrayToMatch.length;i++){
      eachWord = arrayToMatch[i];
      var a = eachWord.split('');
      var b = a.sort()

      if(b.length === originalArray.length){
        if(b.toString() === originalArray.toString()){
          result.push(arrayToMatch[i]);
        }
      }

  }

  if(result.length > 0){
    return result;
  } else {
    return [];
  }


};

module.exports = subject;
