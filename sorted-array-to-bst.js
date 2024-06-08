// Converted sorted array to binary search tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
function sortedArrayToBST(nums) {
  if (!nums.length) {
    return null;
  }

  const middle = Math.floor(nums.length / 2);

  const node = new TreeNode(nums[middle]);

  node.left = sortedArrayToBST(nums.slice(0, middle));
  node.right = sortedArrayToBST(nums.slice(middle + 1));

  return node;
}

const nums = [-10, -3, 0, 5, 9];
console.log(sortedArrayToBST(nums));

const nums2 = [0];
console.log(sortedArrayToBST(nums2));

const nums3 = [1, 3];
console.log(sortedArrayToBST(nums3));
