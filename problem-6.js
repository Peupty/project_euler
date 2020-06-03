const range = require("./utils/range");

function difference(n) {
  let result = range(1, n).reduce(
    (acc, current) => {
      acc.sumOfSquares += current ** 2;
      acc.sum += current;
      return acc;
    },
    { sumOfSquares: 0, sum: 0 }
  );

  return result.sum ** 2 - result.sumOfSquares;
}

console.log(difference(100));
