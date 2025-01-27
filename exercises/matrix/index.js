// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const matrix = [];

  let startRow = 0;
  let startColumn = 0;
  let endRow = n - 1;
  let endColumn = n - 1;
  let counter = 1;

  for (let i = 0; i < n; i++) {
    matrix.push([]);
  }

  while (startColumn <= endColumn && startRow <= endRow) {
    for (let i = startColumn; i <= endColumn; i++) {
      matrix[startRow][i] = counter;
      counter += 1;
    }
    ++startRow;

    for (let i = startRow; i <= endRow; i++) {
      matrix[i][endColumn] = counter;
      counter += 1;
    }
    --endColumn;

    for (let i = endColumn; i >= startColumn; i--) {
      matrix[endRow][i] = counter;
      counter += 1;
    }
    --endRow;

    for (let i = endRow; i >= startRow; i--) {
      matrix[i][startColumn] = counter;
      counter += 1;
    }
    ++startColumn;
  }

  return matrix;
}

module.exports = matrix;
