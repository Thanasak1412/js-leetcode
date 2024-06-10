// Power of Three
// Given an integer `n`, return `true` if it is a power of three. Otherwise, return `false`.
// An integer `n` is a power of three, if there exists an integer `x` such that n === 3^x;
/**
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfThree(n) {
  if (n === 1 || n === 3) {
    return true;
  }

  if (n < 3) {
    return false;
  }

  let result = n;

  while (result <= n && result > 3) {
    result /= 3;

    if (result === 3) {
      return true;
    }
  }

  return false;
}

const n1 = 27;
console.log(isPowerOfThree(n1));

const n2 = 0;
console.log(isPowerOfThree(n2));

const n3 = -1;
console.log(isPowerOfThree(n3));

const n4 = 81;
console.log(isPowerOfThree(n4));

const n5 = 45;
console.log(isPowerOfThree(n5));

const n6 = 1;
console.log(isPowerOfThree(n6));

/**
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfThree2(n) {
  if (n <= 0) {
    return false;
  }

  const logBase3 = Math.log(n) / Math.log(3);
  const tolerance = 1e-10;

  return Math.abs(logBase3 - Math.round(logBase3)) < tolerance;
}

console.log(isPowerOfThree2(n1));
