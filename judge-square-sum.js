// Sum of square numbers
// Given a non-negative integer `c`,
// decide where there're two integers `a` and `b` such that `a^2 + b^2 = c`.
/**
 * @param {number} c
 * @return {boolean}
 */
function judgeSquareSum(c) {
  let left = 0,
    right = Math.floor(Math.sqrt(c));

  while (left <= right) {
    const sum = left * left + right * right;

    if (sum === c) {
      return true;
    } else if (sum > c) {
      right--;
    } else {
      left++;
    }
  }

  return false;
}

console.log(judgeSquareSum(5));
