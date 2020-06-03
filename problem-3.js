function primeFactors(n) {
  if (n < 2) return false;

  const factors = [];

  for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
      factors.push(i);
      n /= i;
    }
  }
  return factors;
}

function largestPrimeFactor(n) {
  return primeFactors(n).pop();
}

console.log(largestPrimeFactor(600851475143));
