// Merge sorted array
// you are given two integer arrays `nums1` and `nums2`,
// sorted in non-decreasing order,
// and two integer `m` and `n`, representing the number of elements in `nums1` and `nums2` respectively.
// Merge `nums1` and `nums2` into an single array sorted in non-decreasing order.
// The final sorted array should no tbe returned by the function,
// but instead be stored inside the array `nums1`.
// To accommodate this, `nums1` has a length of `m+n`, where the first `m` elements
// denote elements that should be merged, and the last `n` elements are ste to `0`
// and should be ignored.
// `nums2` has a length of n.
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1, m, nums2, n) {
  if (m && n === 0) {
    nums1[0] = nums1[0] < 0 ? nums1[0] : 1;

    nums1.splice(m === 0 ? n : m);

    return;
  }

  nums1.splice(m);
  nums2.splice(n);

  let i = 0,
    j = 0;

  const sortedArray = [];

  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) {
      sortedArray.push(nums1[i]);
      i++;
    } else {
      sortedArray.push(nums2[j]);
      j++;
    }
  }

  for (; i < m; i++) {
    sortedArray.push(nums1[i]);
  }

  for (; j < n; j++) {
    sortedArray.push(nums2[j]);
  }

  i = 0;
  j = sortedArray.length - 1;

  for (; i <= j; i++) {
    nums1[i] = sortedArray[i];
  }
}

const nums1 = [
    -50, -48, -47, -47, -46, -44, -43, -43, -41, -39, -38, -37, -37, -37, -33,
    -33, -32, -31, -29, -29, -27, -26, -26, -26, -25, -25, -24, -24, -23, -22,
    -22, -22, -18, -17, -17, -14, -14, -11, -11, -11, -6, -5, -5, -5, -5, -4,
    -1, 0, 2, 2, 2, 2, 5, 6, 7, 7, 9, 10, 13, 13, 14, 14, 18, 21, 21, 21, 22,
    24, 24, 24, 25, 26, 26, 29, 29, 29, 30, 30, 31, 31, 32, 33, 34, 34, 34, 35,
    38, 40, 41, 42, 43, 44, 44, 46, 46, 47, 47, 48, 49, 49,
  ],
  m = 100,
  nums2 = [],
  n = 0;

merge(nums1, m, nums2, n);

console.log(nums1);

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
function improveMerge(nums1, m, nums2, n) {
  nums1.splice(m);
  nums2.splice(m);

  // Start from the end of nums1 and nums2
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  // Merge nums1 and nums2 from back to front
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k--] = nums1[i--];
    } else {
      nums1[k--] = nums2[j--];
    }
  }

  // Copy remaining elements of nums2, if any
  while (j >= 0) {
    nums1[k--] = nums2[j--];
  }
}

// Example usage:
let nums3 = [1, 2, 3, 0, 0, 0];
let m3 = 3;
let nums4 = [2, 5, 6];
let n4 = 3;

improveMerge(nums3, m3, nums4, n4);

console.log(nums3);
