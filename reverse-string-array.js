// Reverse String
// Write a function that reverse a string. The input string is given as an array of characters `s`.
// You must do this by modifying the input array `in-place` with O(1) extra memory.
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
function reverseString(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    // Swap characters at left and right indices
    [s[left], s[right]] = [s[right], s[left]];

    // Move the pointers toward the center
    left++;
    right--;
  }
}

const s1 = ["h", "e", "l", "l", "o"];
reverseString(s1);
console.log(s1)

const s2 = ["H", "a", "n", "n", "a", "h"];
reverseString(s2);
console.log(s2)
