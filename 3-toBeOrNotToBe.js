const expect = (value) => {
  return {
    toBe: (compare) => {
      if (value === compare) return true;

      throw new Error("Not Equal");
    },
    notToBe: (compare) => {
      if (value !== compare) return true;

      throw new Error("Equal");
    },
  };
};

// console.log(expect(5).toBe(5))
// console.log(expect(5).toBe(7))
// console.log(expect(5).notToBe(5))
console.log(expect(5).notToBe(7));

// node 3-toBeOrNotToBe.js
