const factorial = (n) => {
  if (n === 1) return BigInt(1);

  return BigInt(factorial(n - 1) * BigInt(n));
};

const sumDigits = (n) => {
  let sum = BigInt(0);
  while (n > 0) {
    sum += BigInt(n % BigInt(10));
    n = BigInt(n / BigInt(10));
  }
  return sum;
};

const compute = (n) => {
  n = factorial(n);

  return sumDigits(n);
};

console.log(compute(100));
