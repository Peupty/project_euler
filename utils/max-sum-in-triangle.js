const calculate = (triangle) => {
  let height = triangle.length;

  for (let row = height - 2; row >= 0; row--) {
    let rowSize = triangle[row].length;

    for (let i = 0; i < rowSize; i++) {
      let leftChild = triangle[row + 1][i];
      let rightChild = triangle[row + 1][i + 1];
      triangle[row][i] += leftChild > rightChild ? leftChild : rightChild;
    }
  }
  return triangle[0][0];
};

module.exports = calculate;
