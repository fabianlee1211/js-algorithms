const getRandomInt = require('./utils/getRandomInt');
const removeArrayValues = require('./remove-array-values');

/**
 * Mark Six machine that generates 6 unique numbers
 */
module.exports = function markSix() {
  let markSixNumbers = Array.from({ length: 49 }, (_, i) => 1 + i);
  const rolledBalls = [];

  for (let i = 0; i < 6; i++) {
    const ballIndex = getRandomInt(0, markSixNumbers.length);
    const ball = markSixNumbers[ballIndex];
    rolledBalls.push(ball);
    markSixNumbers = removeArrayValues(markSixNumbers, ball);
  }

  return rolledBalls;
};
