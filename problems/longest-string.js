'use strict';

function longestString(arr) {
  var longest;

  // Loop Method
  for (var i=0; i<arr.length; i++) {
    var elem = arr[i];
    if (typeof elem === 'string') {
      if (!longest || elem.length > longest.length) {
        longest = elem;
      }
    }
  }

  return longest;

}

  // Sort Method
//   return arr.sort(function (a, b) {
//     if (typeof a !== 'string') { return 1; }
//     if (typeof b !== 'string') { return -1; }
//     if (a.length > b.length) { return -1; }
//     if (b.length > a.length) { return 1; }
//     return 0;
//     }
//   })[0]
// }

module.exports = longestString;
