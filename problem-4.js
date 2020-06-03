function findLargestPalindrome() {
  let i = 999;
  let largest = 0;

  while (i > 0) {
    for (let j = i; j > 0; j--) {
      let test = j * i;

      /*
        end while loop if first product of j * i is less than largest,
        all palindromes after this will be smaller
      */
      if (j === i && test <= largest) return largest;

      /*
        break for loop since a palindrome greater than largest
        is impossible to find for given i
      */
      if (test <= largest) break;

      let isPalindrome = test == reverse(test);

      if (isPalindrome) {
        largest = test;
        break;
      }
    }
    i--;
  }
  return largest;
}

function reverse(n) {
  return n.toString().split("").reverse().join("");
}

console.log(findLargestPalindrome());
