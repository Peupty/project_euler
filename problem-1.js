function findMultiples(n) {
  let i = 0,
    sum = 0;
  while (i < n) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
    i++;
  }
  return sum;
}

console.log(findMultiples(1000));
