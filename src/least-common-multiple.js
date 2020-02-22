/**
 * Least Common Multiple
 * @param {array} arr The range of the numbers for getting the LCM
 * @return {number} LCM
 */
function leastCommonMultiple(arr) {
  let smaller = Math.min(...arr);
  let larger = Math.max(...arr);
  if (smaller === 0) return undefined;

  // Generates sequencial numbers
  // eg. [1,5] => [5,4,3,2,1]
  let numbers = [];
  for (let i = larger; i >= smaller; i--) {
    numbers = [...numbers, i];
  }

  let lcm = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    let GCF = greatestCommonFactor([lcm, numbers[i]]);
    lcm = (lcm * numbers[i]) / GCF;
  }
  return lcm;
}

/**
 * Greatest Common Factor - Euclid's Algorithm
 * https://www.calculatorsoup.com/calculators/math/gcf.php
 * @param {array} arr 2 numbers for getting GCF
 * @return {number} GCF
 */
function greatestCommonFactor(arr) {
  let smaller = Math.min(...arr);
  let larger = Math.max(...arr);
  if (smaller === larger) return smaller;
  let diff = larger - smaller;
  while (diff !== 0) {
    if (diff > smaller) {
      diff = diff - smaller;
    }
    if (diff <= smaller) {
      larger = smaller;
      smaller = diff;
      diff = larger - smaller;
    }
  }
  const GCF = smaller;
  return GCF;
}

module.exports = {
  greatestCommonFactor,
  leastCommonMultiple,
};

// function greatestCommonFactorV1(arr) {
//   let smaller = Math.min(...arr);
//   let larger = Math.max(...arr);
//   if (smaller === larger) return smaller;
//   let ended = false;
//   let GCF = smaller;
//   let i = 1;
//   while (!ended) {
//     const diff = larger - smaller * i;
//     if (diff === 0) {
//       GCF = smaller;
//       ended = true;
//     }
//     if (diff <= smaller) {
//       larger = smaller;
//       smaller = diff;
//       i = 1;
//     } else i++;
//   }
//   return GCF;
// }
