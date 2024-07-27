// Final Value of Variable After Performing Operations
// There is a programming language with only four operations and one variable X:
// ++X and X++ increments the value of the variable X by 1.
// --X and X-- decrements the value of the variable X by 1.
// Initially, the value of X is 0.
// Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.

function finalValueAfterOperations(operations) {
  let result = 0;

  for (const opt of operations) {
    opt.includes("+") ? result++ : result--;
  }

  return result;
}

const operations1 = ["--X", "X++", "X++"];
const operations2 = ["++X", "++X", "X++"];

console.log(finalValueAfterOperations(operations1));
console.log(finalValueAfterOperations(operations2));
