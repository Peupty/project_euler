const isPrime = require("./utils/is-prime");

function findPrime(n) {
  const primes = [2, 3];

  if (primes[n - 1]) return primes[n - 1];

  let test = primes[primes.length - 1] + 1;

  while (primes.length < n) {
    if (isPrime(test)) primes.push(test);
    test++;
  }
  return primes.pop();
}

console.log(findPrime(10001));
