// Find the index of the first occurrence in a string
// Given two strings `needle` and `haystack`
// return the index of the first occurrence of `needle` in haystack
// or -1 if `needle` is not part of `haystack`
function strStr(haystack, needle) {
  if (haystack.length < needle.length) {
    return -1;
  }

  for (const index in haystack) {
    if (haystack.slice(index, Number(index) + needle.length) === needle) {
      return +index;
    }
  }

  return -1;
}

const haystack = "sadbutsad";
const needle = "sad";

const haystack2 = "leetcode";
const needle2 = "leeto";

const haystack3 = "hello";
const needle3 = "ll";

const haystack4 = "mississippi";
const needle4 = "issip";

console.log(strStr(haystack, needle));
console.log(strStr(haystack2, needle2));
console.log(strStr(haystack3, needle3));
console.log(strStr(haystack4, needle4));
