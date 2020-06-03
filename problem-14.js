function calculate(value) {
  if (value % 2 === 0) return parseInt(value / 2);
  return 3 * value + 1;
}

function sequence(current) {
  const result = [current];

  while (current !== 1) {
    current = calculate(current);
    result.push(current);
  }
  return result;
}

function longestChain(n) {
  let i = 1,
    largest = { length: 0, i: 0 };

  while (i < n) {
    let length = sequence(i).length;
    if (length > largest.length) largest = { i, length };
    i++;
  }
  return largest;
}

console.log(longestChain(1000000))
