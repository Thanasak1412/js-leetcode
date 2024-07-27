// Score of a String
// You are given a string `s`. The score of a string is defined as the sum of the absolute
// difference between the ASCII values of adjacent characters.

function scoreOfString(s) {
  if (s.length === 1) {
    return s.charCodeAt(0);
  }

  const ascii = [];

  for (const char of s) {
    ascii.push(char.charCodeAt(0));
  }

  let result = 0;
  for (let i = 0, j = 1; j < ascii.length; i++, j++) {
    const abs = Math.abs(ascii[i] - ascii[j]);

    result += abs;
  }

  return result;
}

const input1 = "hello";
console.log(scoreOfString(input1));

const input2 = "zaz";
console.log(scoreOfString(input2));

// Optimize
function optimize(s) {
  let result = 0;

  for (let i = 0; i < s.length - 1; i++) {
    const diff = Math.abs(s[i].charCodeAt(0) - s[i + 1].charCodeAt(0));

    result += diff;
  }

  return result;
}

console.log(optimize(input1));
console.log(optimize(input2));
