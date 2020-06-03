const fs = require("fs");

const alph = (() => {
  const result = {};

  for (let i = 0; i < 26; i++) {
    result[String.fromCharCode(i + 65)] = i + 1;
  }
  return result;
})();

let names = fs.readFileSync(__dirname + "/resources/problem-22-names.txt", {
  encoding: "utf8",
});

names = names
  .replace(/"/g, "")
  .split(",")
  .sort((a, b) => (a > b ? 1 : -1));

const getNameValue = (name) => {
  let val = 0;

  for (let letter of name) {
    val += alph[letter];
  }
  return val;
};

const calculateTotalValue = () => {
  let total = 0;

  const len = names.length;

  for (let i = 0; i < len; i++) {
    let val = getNameValue(names[i]) * (i + 1);
    total += val;
  }
  return total;
};

console.log(calculateTotalValue());

console.log(String.fromCharCode(65));
