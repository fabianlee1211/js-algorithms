/**
 * Finds the sum of all odd fibonacci numbers smaller than or equal to a number.
 * @param {num} The comparing number
 * @return {number} sum The sum of all odd fibonacci numbers smaller than or equal to num.
 */

function sumFibs(num) {
  var fibArr = [1,1];
  var sum = 2;
  if(num < 1) return;
  if(num == 1) return sum;
  
  while(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2] <= num){
    var next = fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2];
    fibArr.push(next);
    if(next % 2 == 0) continue;
    if(next <= num) sum += next;
  }
  return sum;
}
