// ROT13 is a simple letter substitution cipher that replaces a letter with the 13th letter after it, in the alphabet.

function rot13(str) { 

  var arr = [];

  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 77) arr.push(str.charCodeAt(i) + 13);
    else if (str.charCodeAt(i) > 77 && str.charCodeAt(i) <= 90) arr.push(str.charCodeAt(i) - 13);
    else arr.push(str.charCodeAt(i));
  }

  for (var j = 0; j < arr.length; j++) {
    arr[j] = String.fromCharCode(arr[j]);
  }

  return arr.join('');
}