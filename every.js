const every = (arr, test) => {
  for (element of arr) {
    if (!test(element)) {
      return false;
    }
  }

  return true;
};

const everyWithSome = (arr, test) => {
  return arr.some((element) => test(element));
}
console.log(everyWithSome([1, 3, 5], (n) => n < 10));
console.log(everyWithSome([2, 4, 16], (n) => n < 10));
