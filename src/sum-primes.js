/**
 * Sum of all prime numbers that are less than or equal to num
 * @param {number} number
 * @return {number} Sum of all prime numbers
 */
function sumPrimes(number) {
  let sum = 0;
  for (let i = number; i >= 2; i--) {
    if (isPrime(i)) sum += i;
    else continue;
  }
  return sum;
}

/**
 * Check if a number is prime
 * @param {number} number
 * @return {boolean}
 */
function isPrime(number) {
  if (number === 1) return false;
  if (number === 2) return true;
  else {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) return false;
    }
    return true;
  }
}

module.exports = {
  isPrime,
  sumPrimes,
};
