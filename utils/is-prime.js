function isPrime(n) {
  if (n === 1 || n === 0) return false;

  let q = parseInt(Math.sqrt(n));

  for (let i = 2; i <= q; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

module.exports = isPrime;
