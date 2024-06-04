// Remove duplicates from sorted array
/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
  if (!nums.length || !Array.isArray(nums)) {
    return 0;
  }

  if (nums.length === 1) {
    return nums.length;
  }

  let first = 0;
  let last = nums.length - 1;
  const uniqueNums = new Set(nums[first].toString());

  while (first < last) {
    if (!uniqueNums.has(nums[first].toString())) {
      uniqueNums.add(nums[first].toString());
      first++;
    }

    if (!uniqueNums.has(nums[last].toString())) {
      uniqueNums.add(nums[last].toString());
      last--;
    } else {
      first++;
      last--;
    }
  }

  return uniqueNums.size;
}

const nums1 = [1, 1, 2];
const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

console.log(removeDuplicates(nums1));
console.log(removeDuplicates(nums2));
