const createCounter = (init) => {
  let counter = init;
  return {
    increment: () => {
      ++counter;
      return counter;
    },
    decrement: () => {
      --counter;
      return counter;
    },
    reset: () => {
      return (counter = init);
    },
  };
};
let result = createCounter(5);
console.log(result.increment());
console.log(result.decrement());
console.log(result.reset());
