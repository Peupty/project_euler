const isPrime = require("./utils/is-prime");

function sumOfPrimes(n) {
  const primes = [2, 3];

  let result = 5;

  let test = primes[primes.length - 1] + 1;

  while (test < n) {
    if (isPrime(test)) result += test;
    test++;
  }
  return result
}

console.log(sumOfPrimes(2000000));
