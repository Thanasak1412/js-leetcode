// Excel sheet column number
// Given a string `columnTitle` that represents the column title as appears in an Excel sheet,
// return its corresponding column number.
/**
 * @param {string} columnTitle
 * @return {number}
 */
function titleToNumber(columnTitle) {
  const lookup = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
    I: 9,
    J: 10,
    K: 11,
    L: 12,
    M: 13,
    N: 14,
    O: 15,
    P: 16,
    Q: 17,
    R: 18,
    S: 19,
    T: 20,
    U: 21,
    V: 22,
    W: 23,
    X: 24,
    Y: 25,
    Z: 26,
  };

  let result = 0;
  for (const i in columnTitle) {
    const pos = columnTitle.length - i - 1;

    const value = lookup[columnTitle[i]] * Math.pow(26, pos);

    result += value;
  }

  return result;
}

const columnTitle1 = "A";
console.log(titleToNumber(columnTitle1));

const columnTitle2 = "AB";
console.log(titleToNumber(columnTitle2));

const columnTitle3 = "ZY";
console.log(titleToNumber(columnTitle3));
