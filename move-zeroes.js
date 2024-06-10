// Move zeroes
// Given an integer array `nums`, move all `0's` to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
  if (nums.length === 1) return;

  let lastNonZeroFoundAt = 0;

  //   If the current element is not 0,
  //   then we need append it juts in front of last non 0 element we found.
  for (const element of nums) {
    if (element !== 0) {
      nums[lastNonZeroFoundAt] = element;
      lastNonZeroFoundAt++;
    }
  }

  // After we have finished processing new elements,
  // all the non-zero elements are already in-place.
  // we just need to fill remaining array with 0's.
  for (let i = lastNonZeroFoundAt; i < nums.length; i++) {
    nums[i] = 0;
  }
}

const nums1 = [0, 1, 0, 3, 12];
moveZeroes(nums1);
console.log(nums1);

const nums2 = [0];
moveZeroes(nums2);
console.log(nums2);
