const input = [2, 0, 2, 1, 1, 0];
const output = [0, 0, 1, 1, 2, 2];

function mergeSort(input) {
  if (input.length <= 1) {
    return input;
  }

  const middle = Math.floor(input.length / 2);
  const left = mergeSort(input.slice(0, middle));
  const right = mergeSort(input.slice(middle));

  return merge(left, right);
}

function merge(left, right) {
  const sorted = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      sorted.push(left[leftIndex]);
      leftIndex++;
    } else {
      sorted.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return sorted.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
