// 1. Two sum
// Given an array of integers `nums` and an integer `target`, return indicates of the two numbers
// such that they add up to `target`.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  const pairIndex = {};

  for (const index in nums) {
    if (target - nums[index] in pairIndex) {
      return [index, pairIndex[target - nums[index]]];
    }

    pairIndex[nums[index]] = index;
  }
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
