// Valid anagram
// Given two strings `s` and `t`,
// return `true` if `t` is an anagram of `s`
// and `false` otherwise.
// An Anagram is word or phrase formed by rearranging the letters of a difference word or phrase
// typically using all the original letters exactly once.
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const sorted1 = s.split("").sort((a, b) => a.localeCompare(b)).join("");
  const sorted2 = t.split("").sort((a, b) => a.localeCompare(b)).join("");

  return sorted1 === sorted2;
}

const s1 = "anagram",
  t1 = "nagaram";
console.log(isAnagram(s1, t1));

const s2 = "rat",
  t2 = "car";
console.log(isAnagram(s2, t2));

const s3 = "dog",
  t3 = "guinea pig";
console.log(isAnagram(s3, t3));

const s4 = "ananana",
  t4 = "naaaaaa";
console.log(isAnagram(s4, t4));

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram2(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const count = {};

  for (const char of s) {
    count[char] = (count[char] || 0) + 1;
  }

  for (const char of t) {
    if (!count[char]) {
      return false;
    }

    count[char]--;
  }

  return true;
}

const s5 = "anagram",
  t5 = "nagaram";

console.log(isAnagram2(s5, t5));
