// Plus one
// Given a large integer represented as an integer array `digits`,
// where each `digits[i]` is the `ith` digit of the integer.
// The digits are ordered from most significant to least significant in left-to-right order.
// The large integer does not contain any leading 0's.

/**
 * @param {number[]} digits
 * @return {number[]}
 */
function plusOne(digits) {
  if (digits.length === 1) {
    return [Number(digits[0]) + 1].toString().split("");
  }

  let i = 0,
    j = 1;
  let result = "";

  while (result.length < digits.length) {
    if (typeof digits[i] === "number") {
      result += digits[i];
    }

    if (typeof digits[j] === "number") {
      result += digits[j];
    }

    i += 2;
    j += 2;
  }

  return [...(BigInt(result) + BigInt(1)).toString().split("")];
}

const digits1 = [4, 3, 2, 1];
const digits2 = [1, 2, 3];
const digits3 = [9];
const digits4 = [1, 0];
const digits5 = [9, 9];
const digits6 = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];

// console.log(plusOne(digits1));
// console.log(plusOne(digits2));
// console.log(plusOne(digits3));
// console.log(plusOne(digits4));
// console.log(plusOne(digits5));
console.log(plusOne(digits6));
