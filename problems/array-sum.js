'use strict';

function arraySum(arr) {
  var total = 0;

  for (var i = 0; i < arr.length; i++) {
    var element = arr[i];
      if (typeof element === 'object') {
          arraySum(element);
          total = total + arraySum(element);
    }else {
      total = total + element;
    }
  }
    return total;
}

module.exports = arraySum;
