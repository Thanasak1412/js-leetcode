// Intersection of two array II
// Given two integer arrays `nums1` and `nums2`, return an array of their intersection
// Each element in the result must appear as many times as it shows in both arrays
// and you may return the result in any order.
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersect(nums1, nums2) {
  const countNums1 = new Map();

  for (const num of nums1) {
    countNums1.set(num, (countNums1.get(num) ?? 0) + 1);
  }

  const result = [];

  for (const num of nums2) {
    if (countNums1.get(num) > 0) {
      result.push(num);
      countNums1.set(num, countNums1.get(num) - 1);
    }
  }

  return result;
}

const nums1 = [1, 2, 2, 1],
  nums2 = [2, 2];
console.log(intersect(nums1, nums2));

const nums3 = [4, 9, 5],
  nums4 = [9, 4, 9, 8, 4];
console.log(intersect(nums3, nums4));
