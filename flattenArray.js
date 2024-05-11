function flattenArray(arr, maxDepth, currentDepth = 0) {
  let result = [];

  for (let item of arr) {
    if (Array.isArray(item) && currentDepth < maxDepth) {
      result.push(...flattenArray(item, maxDepth, currentDepth + 1));
    } else {
      result.push(item);
    }
  }

  return result;
}

// Example usage
const arr = [1, [2, [3, 4], 5], 6, [7, [8, 9, [10, 11]], 12]];
const maxDepth = 3;
const flattenedArr = flattenArray(arr, maxDepth);
console.log(flattenedArr);
