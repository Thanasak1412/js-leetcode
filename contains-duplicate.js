// Contains duplicate
// Given an integer an array `nums`, return `true` is any value appear at least twice in the array,
// and return `false` if every element is distinct.
/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
  if (nums.length === 1) {
    return false;
  }

  const lookup = {};

  for (const num of nums) {
    if (lookup[num]) {
      return true;
    }

    lookup[num] = true;
  }

  return false;
}

// const nums1 = [1, 2, 3, 1];
// console.log(containsDuplicate(nums1));

// const nums2 = [1, 2, 3, 4];
// console.log(containsDuplicate(nums2));

// const nums3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
// console.log(containsDuplicate(nums3));

const nums4 = [1];
console.log(containsDuplicate(nums4));
