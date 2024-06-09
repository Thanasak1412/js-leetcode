// Happy number
// Write an algorithm to determine if a number `n` is happy.
// A happy number is a number defined by the following process:
// - Starting with any positive integer, replace the number by the sum of the squares of its digits.
// - Repeat the process until the number equals 1 (where it will stay),or it loops endlessly in a cycle which does not include 1
// - Those numbers for which this process ends in 1 are happy.
// Return `true` if `n` is a happy number, and `false` if not.
/**
 * @param {number} n
 * @return {boolean}
 */
function isHappy(n) {
  if (n <= 0) {
    return false;
  }

  let result = n;
  const prevResult = {};

  while (result >= 2) {
    if (prevResult[result]) {
      return result === 1;
    }

    prevResult[result] = true;

    result = result
      .toString()
      .split("")
      .reduce((prev, curr) => Math.pow(+curr, 2) + +prev, 0);
  }

  return result === 1;
}

const n1 = 19;
console.log(isHappy(n1));

const n2 = 2;
console.log(isHappy(n2));

const n3 = -1;
console.log(isHappy(n3));
