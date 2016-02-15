var FoodChain = function() {};

FoodChain.prototype.verse = function(input) {

  var perhapsDie = 'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n'
  var ladySwallow = 'I know an old lady who swallowed a ';

  if(input === 1){
    return verseOne;
  } else if (input === 2){
    return verseTwo;
  }


};

module.exports = FoodChain;
