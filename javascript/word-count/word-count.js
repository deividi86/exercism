var words = function() {};

words = function(phrase) {
  var sentenceArray = phrase.split(/[\s,]+/);
  var result = [];

  for(i = 0; i < sentenceArray.length; i++){
    if(result.hasOwnProperty(sentenceArray[i])){
      result[sentenceArray[i]] += 1;
    } else {
      result[sentenceArray[i]] =1;
    }
  }
  delete result[""];

  return result;

};


module.exports = words;
