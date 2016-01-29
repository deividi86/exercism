var pangram = function(input) {
  this.input = input;
};

pangram.prototype.isPangram = function() {
  var sentenceArray = this.input.split('');
  delete sentenceArray[""];

  uniqueArray = sentenceArray.filter(function(item, pos) {
    return sentenceArray.indexOf(item) == pos;
  })

  if(uniqueArray.length < 27){
    return false;
  }
  return true;
};

module.exports = pangram;
