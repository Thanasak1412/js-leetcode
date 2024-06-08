// Single Number
// Given a non-empty array of integers `nums`
// every element appears twice except for one.
// Find that single one.
// * You must implement a solution with a linear runtime complexity
// * and use only constant extra space.
/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  let result = 0;

  for (const num of nums) {
    result ^= num;
  }

  return result;
}

const nums = [4, 1, 2, 1, 2];
console.log(singleNumber(nums));
