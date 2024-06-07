class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function inorderTraversal(root) {
  const result = [];
  const stack = [];
  let current = root;

  while (current || stack.length > 0) {
    while (current) {
      stack.push(current);

      current = current.left;
    }

    current = stack.pop();

    result.push(current.val);
    current = current.right;
  }

  return result;
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);

const root2 = new TreeNode(1);
root2.left = new TreeNode(2);
root2.left.left = new TreeNode(5);
root2.left.right = new TreeNode(6);
root2.right = new TreeNode(3);

console.log(inorderTraversal(root));
console.log(inorderTraversal(root2));
