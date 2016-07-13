var addArrays = function(x, y) {
  var len = x.length;
  var newArray = [];
  if(typeof x[0] === 'number' && typeof y[0] === 'number'){
    for(var i = 0; i < len; i++) {
      var result = x[i] + y[i];
      newArray.push(result);
    }
    return (newArray);
  }
  else if (typeof x[0] ==='boolean' && typeof y[0] === 'boolean') {
    for(var i = 0; i < len; i++) {
      var result = x[i] || y[i];
      newArray.push(result);
    }
    return (newArray);
  }
  else if (typeof x[0] === 'string' && typeof y[0] === 'string') {
    for(var i = 0; i < len; i++) {
      var result = x[i] + " " + y[i];
      newArray.push(result);
    }
    return (newArray);
  }
  else {
    alert("please enter matching arrays");
  }
};


$("form").submit(function() {
  if (typeof x[0] === 'number' && typeof y[0] === 'number')) {
    function intArray(z) {
      var sArray = z.val().split(',');
      var iArray = sArray.map(Number);
      return iArray;
    }

      var xArray = intArray($('#firstArray'));
      var yArray = intArray($('#secondArray'));
      var finalArray = addArrays(xArray, yArray);
    }
  $('#result').text(finalArray);
  return false;
});
