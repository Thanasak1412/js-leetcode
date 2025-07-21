/**
 * @param {string} s
 * @return {string}
 */
function makeFancyString(s) {
  let result = "";
  let count = 1;

  for (let i = 0; i < s.length; i++) {
    if (i > 0 && s[i] === s[i - 1]) {
      count++;
    } else {
      count = 1;
    }

    if (count <= 2) {
      result += s[i];
    }
  }

  return result;
}
