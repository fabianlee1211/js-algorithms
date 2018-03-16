// This function removes specified values from an array.

function removeArrayValue(arr) {

  var args = arr.slice.call(arguments);

  return args[0].filter(function (val) {
    for (var i = 1; i < args.length; i++) {
      if (val == args[i]) return false;
    }
    return true;
  });

}
