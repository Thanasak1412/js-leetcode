/**
 * @param {number} columnNumber
 * @return {string}
 */
function convertToTitle(columnNumber) {
  let result = "";

  while (columnNumber > 0) {
    columnNumber--; // shift to 0-indexed
    const remainder = columnNumber % 26;
    result = String.fromCharCode(65 + remainder) + result; // 65 is 'A'
    columnNumber = Math.floor(columnNumber / 26);
  }

  return result;
}

console.log(convertToTitle(1)); // A
console.log(convertToTitle(26)); // Z
console.log(convertToTitle(27)); // AA
console.log(convertToTitle(28)); // AB
console.log(convertToTitle(52)); // AZ
console.log(convertToTitle(701)); // ZY
console.log(convertToTitle(702)); // ZZ
console.log(convertToTitle(703)); // AAA
