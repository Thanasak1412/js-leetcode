// Sqrt(x)
// Given a non-negative integer `x`
// return the square root of `x` rounded down to the nearest integer.
// the returned integer should be non-negative as well
// you must not use any built-in exponent function or operator.
/**
 * @param {number} x
 * @return {number}
 */
function mySqrt(x) {
  if (x === 0) {
    return 0;
  }

  if (x <= 3) {
    return 1;
  }

  let times = 0;
  let oddNumber = 1;
  let result = x;

  while (result > 0) {
    result -= oddNumber;
    oddNumber += 2;

    if (result >= 0) {
      times++;
    }
  }

  return times;
}

console.log(mySqrt(225));
console.log(mySqrt(2));
console.log(mySqrt(4));
console.log(mySqrt(8));
console.log(mySqrt(0));
