var BeerSong = function() {};

BeerSong.prototype.verse = function(input) {
  var beerNumber = input;
  var oneLessBeer = input -1;

  if(input === 0){
    return 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';
  }

  if(oneLessBeer === 0){
    oneLessBeer = 'no'
  }

  var pluralVerse = beerNumber + " bottles of beer on the wall, " + beerNumber + " bottles of beer.\nTake one down and pass it around, " + oneLessBeer + " bottles of beer on the wall.\n"
  var verse = beerNumber + " bottle of beer on the wall, " + beerNumber + " bottle of beer.\nTake it down and pass it around, " + oneLessBeer + " more bottles of beer on the wall.\n"

  if(input === 1){
    return verse;
  }
  return pluralVerse;
};

BeerSong.prototype.sing = function(start, finish) {
  var result = '';
  if(finish === undefined){
    for(i=0;i<=start;i++){
      if(result !== ''){
        result = result.concat('\n');
      }
      result = result.concat(this.verse(start-i));
    }
  }
  var distance = start - finish;


    for(i=0;i<=distance;i++){
      if(result !== ''){
        result = result.concat('\n');
      }
      result = result.concat(this.verse(start-i));
    }

  return result;
};

module.exports = BeerSong;
