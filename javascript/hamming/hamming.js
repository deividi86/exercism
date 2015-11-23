var compute = function() {};

compute = function(a,b) {
  if(a.length !== b.length)
    throw "DNA strands must be of equal length."

  var counter = 0;

  for(i = 0; i < a.length; i++){
    if(a[i] !== b[i])
      counter++;
  }

  return counter;
};


    module.exports = compute;
