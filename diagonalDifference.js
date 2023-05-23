const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];

const diagonalDifference = (arr) => {
  let leftDiagonal = 0;
  let rightDiagonal = 0;

  for (let i = 0; i < arr.length; i++) {
    leftDiagonal += arr[i][i];
  }

  for (let i = 0; i < arr.length; i++) {
    rightDiagonal += arr[i][arr.length - i - 1];
  }

  return Math.abs(leftDiagonal - rightDiagonal);
};

console.log(diagonalDifference(arr));
