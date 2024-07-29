// Find Words Containing Character
// You are given a 0-indexed array of strings `words` and a character `x`.
// Return an array of indices representing the words that contain the character `x`.
// Note that the returned array may be in any order.

function findWordsContaining(words, x) {
  if (!words.length || !x.length) {
    return [];
  }

  const result = [];

  for (const index in words) {
    if (words[index].includes(x)) {
      result.push(Number(index));
    }
  }

  return result;
}

const words1 = ["leet", "code"];
const x1 = "e";
console.log(findWordsContaining(words1, x1));

const words2 = ["abc", "bcd", "aaaa", "cbc"];
const x2 = "a";
console.log(findWordsContaining(words2, x2));

const words3 = ["abc", "bcd", "aaaa", "cbc"];
const x3 = "z";
console.log(findWordsContaining(words3, x3));
