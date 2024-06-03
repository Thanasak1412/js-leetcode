/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
  const sorted = strs.toSorted((a, b) => a.localeCompare(b));
  const first = sorted[0];
  const last = sorted[sorted.length - 1];
  let result = "";

  for (const index in first) {
    if (first[index] !== last[index]) {
      return result;
    }

    result += first[index];
  }

  return result;
}

const strs1 = ["flight", "flower", "flow"];
const strs2 = ["dog", "racecar", "car"];
const strs3 = [""];
const strs4 = ["a"];
const strs5 = ["aaa", "aa", "aaa"];

console.log(longestCommonPrefix(strs1));
console.log(longestCommonPrefix(strs2));
console.log(longestCommonPrefix(strs3));
console.log(longestCommonPrefix(strs4));
console.log(longestCommonPrefix(strs5));
