// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, col = 0, level = '', mid = Math.floor((2 * n - 1) / 2)) {
  // All levels/rows constructed
  if (n === row) {
    return;
  }

  // One level constructed
  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  // Construct level recursively
  if (level.length < 2 * n - 1) {
    if (col >= mid - row && col <= mid + row) {
      pyramid(n, row, col + 1, level + '#');
    } else {
      pyramid(n, row, col + 1, level + ' ');
    }
  }
}

// function pyramid(n) {
//   let mid = Math.floor((2 * n - 1) / 2);

//   for (let row = 0; row < n; row++) {
//     let level = '';

//     for (let column = 0; column < 2 * n - 1; column++) {
//       if (column >= mid - row && column <= mid + row) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }

//     console.log(level);
//   }
// }

module.exports = pyramid;
