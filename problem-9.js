function specialPythagoreanTriplet(n) {
  let a = 1;
  let b = a + 1;
  let c = n - (a + b);

  for (let i = a; i < b; i++) {
    while (b < c) {
      if (isPythagorean(a, b, c)) {
        return a * b * c;
      }
      b++;
      c = n - (a + b);
    }
    a++;
    b = a + 1;
    c = n - (a + b);
  }
}

function isPythagorean(a, b, c) {
  return a ** 2 + b ** 2 === c ** 2;
}

console.log(specialPythagoreanTriplet(1000));
