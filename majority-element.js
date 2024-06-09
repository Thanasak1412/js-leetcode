// Majority element
// Given an array `nums` of size `n`, return the majority element.
// The majority element is the element appear more than `[n / 2]` times.
// You may assume that the majority element always exists in the array.
/**
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  const hash = {};
  for (const num of nums) {
    hash[num] = (hash[num] || 0) + 1;
  }

  const arr = Object.entries(hash);

  arr.sort((a, b) => b[1] - a[1]);

  return +arr[0][0];
}

const nums1 = [3, 2, 3]; // -> [ [ '2', 1 ], [ '3', 2 ] ]
// console.log(majorityElement(nums1));

const nums2 = [2, 2, 1, 1, 1, 2, 2]; // -> [ [ '1', 3 ], [ '2', 4 ] ]
// console.log(majorityElement(nums2));

// const nums3 = [1];
// console.log(majorityElement(nums3));

// implement the majority element in an array with Boyer-Moore Voting algorithm.
function improveMajorityElement(nums) {
  let count = 0;
  let candidate = null;

  for (const num of nums) {
    if (count === 0) {
      candidate = num;
    }

    count += num === candidate ? 1 : -1;
  }

  return candidate;
}

// console.log(improveMajorityElement(nums1));
console.log(improveMajorityElement([2, 3, 1, 0, 1, 2, 2]));
