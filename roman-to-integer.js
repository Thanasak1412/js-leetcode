// Roman to integer
/**
 * @param {string} s
 * @return {number}
 */
function romanToInt(s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let i = 0;
  let output = 0;

  for (const index in s.split("")) {
    if (i === s.length - 1) {
      return output;
    }

    const currValue = map[s[index]];
    const nextValue = map[s[Number(index) + 1]];

    if (currValue >= (nextValue ?? 0)) {
      output += currValue;
    } else {
      i++;
      const sum = (nextValue ?? 0) - currValue;
      output = output + sum;
    }
  }

  return output;
}

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
