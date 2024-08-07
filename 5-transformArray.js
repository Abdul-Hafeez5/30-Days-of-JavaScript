const transform = (arr, fn) => {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i));
  }
  return result;
};

const arr = [1, 2, 3, 4];
const fn = (element, index) => element * 2 % index ;

console.log(transform(arr, fn));
