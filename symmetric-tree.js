// Symmetric tree
// Given the `root` of a binary tree, check whether it is a mirror of itself (i.e. symmetric around its center)

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isSymmetric(root) {
  if (!root.left && !root.right) {
    return true;
  }

  const stack1 = [root.left];
  const stack2 = [root.right];

  while (stack1.length > 0 && stack2.length > 0) {
    const c1 = stack1.pop();
    const c2 = stack2.pop();

    if (!c1 && !c2) continue;
    if (!c1 || !c2 || c1.val !== c2.val) {
      return false;
    }

    stack1.push(c1.left);
    stack1.push(c1.right);
    stack2.push(c2.right);
    stack2.push(c2.left);
  }

  return true;
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(2);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(3);

console.log(isSymmetric(root));

const root2 = new TreeNode(1);
root2.left = new TreeNode(2);
root2.right = new TreeNode(2);
root2.left.left = new TreeNode(null);
root2.left.right = new TreeNode(3);
root2.right.left = new TreeNode(null);
root2.right.right = new TreeNode(3);

console.log(isSymmetric(root2));
