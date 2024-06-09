// Number of 1 Bits
// Write a function that takes the binary representation of a positive integer
// and returns the number of set bits it has (also known as the Hammering weight).
/**
 * @param {number} n
 * @return {number}
 */
function hammingWeight(n) {
  // Convert the integer into binary string
  const binaryString = n.toString(2);

  //   Initialize the count of set bits to 0
  let count = 0;

  //   Iterate through each character in the binary string
  for (const char of binaryString) {
    // If the character is '1', increment the count
    if (char === "1") {
      count++;
    }
  }

  //   Return the total count of set bits
  return count;
}

const n1 = 11;
console.log(hammingWeight(n1));

const n2 = 128;
console.log(hammingWeight(n2));

const n3 = 2147483645;
console.log(hammingWeight(n3));
