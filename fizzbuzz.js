/**
 * Prints 'Fizz' when the number is multiple of 3,
 * 'Buzz' when the number is multiple of 5,
 * @return {string} A series of FizzBuzz...
 */
module.exports = function fizzBuzz() {
  const FIZZ = 'Fizz';
  const BUZZ = 'Buzz';
  for (let i = 1; i <= 100; i++) {
    const fizz = i % 3 === 0;
    const buzz = i % 5 === 0;
    if (fizz && buzz) {
      console.log(FIZZ + BUZZ);
      continue;
    }
    if (fizz) {
      console.log(FIZZ);
      continue;
    }
    if (buzz) {
      console.log(BUZZ);
      continue;
    }
  }
};
