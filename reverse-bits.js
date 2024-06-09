// Reverse Bits
// Reverse bits of a given 32 bits unsigned integer.
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
function reverseBits(n) {
  // Convert the number to a 32-bit binary string
  const binaryStr = n.toString(2).padStart(32, "0");

  // Reverse the binary string
  let reversedStr = "";
  for (let i = binaryStr.length - 1; i >= 0; i--) {
    reversedStr += binaryStr[i];
  }

  //   Convert the reversed binary string back to an integer
  return parseInt(reversedStr, 2) >>> 0;
}

const n1 = 00000010100101000001111010011100;
console.log(reverseBits(n1));

const n2 = 11111111111111111111111111111101;
console.log(reverseBits(n2));
