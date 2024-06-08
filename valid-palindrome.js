// Valid Palindrome
// A phrase is a palindrome if, after converting all uppercase letters intro lowercase letters
// and removing all non-alphanumeric characters, it reads the same forward and backward.
// Alphanumeric characters include letters and numbers.
// Given a string `s`, return `true` if it is a palindrome, or `false` otherwise.
/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
  if (s.length === 1) {
    return true;
  }

  const alphaNumeric = s.toLowerCase().replace(/[^a-z0-9]/gi, "");

  for (let i = 0, j = alphaNumeric.length - 1; i < j; i++, j--) {
    if (alphaNumeric[i] !== alphaNumeric[j]) {
      return false;
    }
  }

  return true;
}

const s1 = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s1));

const s2 = "race a car";
console.log(isPalindrome(s2));

const s3 = " ";
console.log(isPalindrome(s3));

const s4 = "";
console.log(isPalindrome(s4));
