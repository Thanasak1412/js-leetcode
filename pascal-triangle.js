// Pascal's Triangle
// Given an integer `numRows`, return the first numRows of Pascal's triangle
// In Pascal's triangle, each number is the sum other two numbers directly above it as shown.

/**
 * @param {number} numRows
 * @return {number[][]}
 */

function generate(numRows) {
  if (numRows === 1) {
    return [[1]];
  }

  const result = [[1]];

  for (let i = 0; i < numRows - 1; i++) {
    const dummyRow = [0, ...result[result.length - 1], 0];
    const row = [];

    for (let j = 0; j < dummyRow.length - 1; j++) {
      row.push(dummyRow[j] + dummyRow[j + 1]);
    }

    result.push(row);
  }

  return result;
}

const numRows1 = 1;
console.log(generate(numRows1));

const numRows2 = 5;
console.log(generate(numRows2));
