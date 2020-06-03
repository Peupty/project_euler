const sumDigits = (n) => {
  let sum = BigInt(0);

  while (n > 0) {
    sum += n % BigInt(10);
    n /= BigInt(10);
  }
  return Number(sum);
};

let test = BigInt(2 ** 1000);

console.log(sumDigits(test));
