// First unique character in a string
// Given a string `s`, find the first non-repeating character in it
// and return its index. if it does not exist, return -1;
/**
 * @param {string} s
 * @return {number}
 */
function firstUniqChar(s) {
  if (s.length === 1) {
    return 0;
  }

  const map = new Map();

  for (const index in s) {
    if (!map.has(s[index])) {
      map.set(s[index], index);
    } else {
      map.set(s[index], -1);
    }
  }

  let result = Number.MAX_SAFE_INTEGER;
  map.forEach((index) => {
    if (index !== -1 && index < result) {
      result = index;
    }
  });

  return result === Number.MAX_SAFE_INTEGER ? -1 : result;
}

const s1 = "leetcode";
console.log(firstUniqChar(s1));

const s2 = "loveleetcode";
console.log(firstUniqChar(s2));

const s3 = "aabb";
console.log(firstUniqChar(s3));

const s4 = "aadadaad";
console.log(firstUniqChar(s4));
