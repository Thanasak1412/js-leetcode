// Climbing Stairs
// You are climbing a staircase. It takes `n` steps on reach the top.
// Each time you can either climb `1` or `2` steps. In how many distinct ways can you climb to the top?
/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
  if (n <= 3) {
    return n;
  }

  let prev1 = 3;
  let prev2 = 2;
  let curr = 0;

  for (let i = 3; i < n; i++) {
    curr = prev1 + prev2;
    prev2 = prev1;
    prev1 = curr;
  }

  return curr;
}

const n1 = 2;
console.log(climbStairs(n1));

const n2 = 3;
console.log(climbStairs(n2));

const n3 = 44;
console.log(climbStairs(44));
