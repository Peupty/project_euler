cache = [1, 2];

const fib = (n) => {
  if (cache[n - 1]) return cache[n - 1];

  cache[n - 1] = fib(n - 1) + fib(n - 2);

  return cache[n - 1];
};

const evenFibonacciSum = (n) => {
  let val = 0,
    i = 1,
    sum = 0;

  while (val < n) {
    val = fib(i);
    if (val % 2 === 0) sum += val;
    i++;
  }

  return sum;
};

console.log(evenFibonacciSum(4000000));