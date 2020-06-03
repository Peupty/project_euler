function smallestMultiple() {
  let result = false,
    test = 20;
  while (!result) {
    if (isDivUpTo20(test)) {
      result = test;
    } else {
      test += 20;
    }
  }
  return result;
}

function isDivUpTo20(n) {
  const testArr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  const result = testArr.every((el) => n % el === 0);
  return result;
}

console.log(smallestMultiple());
