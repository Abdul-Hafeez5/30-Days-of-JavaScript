const createCounter = (n) => {
  let counter = n;
  return function () {
    return counter++;
  };
};

let result = createCounter(8);
console.log(result()); // 8
console.log(result()); // 9
console.log(result()); // 10
