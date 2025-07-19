function rotate(nums, k) {
  k = k % nums.length;

  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop());
  }

  console.log(nums);
}

const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;

rotate(nums, k);
console.log(nums);
