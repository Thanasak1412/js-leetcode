/**
 * @param {number[]} list1
 * @param {number[]} list2
 * @return {number[]}
 */
function mergeTwoLists(list1, list2) {
  if (!Array.isArray(list1) && !Array.isArray(list2)) {
    return null;
  }

  if (!list1.length || !list2.length) {
    return [...list1, ...list2];
  }

  let i = 0,
    j = 0;
  const sortedArray = [];

  while (i < list1.length && j < list2.length) {
    if (list1[i] < list2[j]) {
      sortedArray.push(list1[i]);
      i++;
    } else {
      sortedArray.push(list2[j]);
      j++;
    }
  }

  return [...sortedArray, ...list1.slice(i), ...list2.slice(j)];
}

const list1 = [1, 2, 4];
const list2 = [1, 3, 4];

console.log(mergeTwoLists(list1, list2));
console.log(mergeTwoLists([], [0]));
console.log(mergeTwoLists([], []));
