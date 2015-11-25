  /* `G` -> `C`
  * `C` -> `G`
  * `T` -> `A`
  * `A` -> `U`*/

  var dnaTranscriber = function() {};

  dnaTranscriber.prototype.toRna = function(input) {
    var array = input.split('');

    for(i = 0; i < array.length ; i ++){
      if(array[i] === 'G')
        array[i] = 'C';
      else if(array[i] === 'C')
        array[i] = 'G';
      else if(array[i] === 'T')
        array[i] = 'A';
      else if(array[i] === 'A')
        array[i] = 'U';
    }
    return array.join("");
  };

  dnaTranscriber.prototype.toDna = function(input) {
    var array = input.split('');

    for(i = 0; i < array.length ; i ++){
      if(array[i] === 'G')
        array[i] = 'C';
      else if(array[i] === 'C')
        array[i] = 'G';
      else if(array[i] === 'U')
        array[i] = 'A';
      else if(array[i] === 'A')
        array[i] = 'T';
    }
    return array.join("");
  };

                  module.exports = dnaTranscriber;
