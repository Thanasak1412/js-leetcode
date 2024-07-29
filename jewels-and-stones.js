// Jewels and Stones
// You're given strings `jewels` representing the types of stones that are jewels/
// and `stones` representing the stones you have. Each character in `stones` is a type of stone you have.
// You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so `a` is considered a different type of stone from `A`.

function numJewelsInStones(jewels, stones) {
  if (!stones.length || !jewels.length) {
    return 0;
  }

  let result = 0;
  const jewelsArray = jewels.split("");
  const stonesArray = stones.split("");

  for (const stone of stonesArray) {
    const find = jewelsArray.find((jewel) => jewel === stone);

    if (find) {
      result++;
    }
  }

  return result;
}

const jewels1 = "aA";
const stones1 = "aAAbbbb";
console.log(numJewelsInStones(jewels1, stones1));

const jewels2 = "z";
const stones2 = "ZZ";
console.log(numJewelsInStones(jewels2, stones2));

function optimize(jewels, stones) {
  const jewelSet = new Set(jewels);

  let count = 0;

  for (const stone of stones) {
    if (jewelSet.has(stone)) {
      count++;
    }
  }

  return count;
}

console.log(optimize(jewels1, stones1));
console.log(optimize(jewels2, stones2));
