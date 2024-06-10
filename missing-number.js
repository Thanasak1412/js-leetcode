// Missing number
// Given an array nums` containing `n` distinct numbers in the range `[0, n]`
// return the only number in the range that is missing from the array.
/**
 * @param {number[]} nums
 * @return {number}
 */
function missingNumber(nums) {
  if (nums.length === 1) {
    return nums[0] === 0 ? 1 : nums[0] - 1;
  }

  let max = nums[0];
  let min = nums[1];

  const map = new Map();

  for (const num of nums) {
    if (max < num) {
      max = num;
    }

    if (min > num) {
      min = num;
    }

    map.set(num, true);
  }

  for (let i = 0; i < max; i++) {
    if (!map.has(i)) {
      return i;
    }
  }

  return max + 1;
}

const nums1 = [3, 0, 1];
console.log(missingNumber(nums1));

const nums2 = [0, 1];
console.log(missingNumber(nums2));

const nums3 = [9, 6, 4, 2, 3, 5, 7, 0, 1];
console.log(missingNumber(nums3));

const nums4 = [1];
console.log(missingNumber(nums4));

const nums5 = [0];
console.log(missingNumber(nums5));
