const calculate = require("./utils/max-sum-in-triangle");
const fs = require("fs");

let data = fs.readFileSync(__dirname + "/resources/problem-67.txt", "utf8");

data = data
  .split("\n")
  .map((el) => el.split(" ").map((elem) => parseInt(elem)));

data = data.splice(0, 100);

console.log(calculate(data));
