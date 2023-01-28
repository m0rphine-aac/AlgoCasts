// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const chunked = [];

  let index = 0;
  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index = index + size;
  }

  return chunked;
}

// function chunk(array, size) {
//   const chunked = [];

//   for (let i = 0; i < Math.ceil(array.length / size); i++) {
//     const subarray = array.slice(i * size, (i + 1) * size);
//     chunked.push(subarray);
//   }

//   return chunked;
// }

// function chunk(array, size) {
//   const chunked = [];

//   for (let element of array) {
//     const lastEl = chunked[chunked.length - 1];

//     if (!lastEl || lastEl.length === size) {
//       // Push a new chunk with current element into chunked
//       chunked.push([element]);
//     } else {
//       lastEl.push(element);
//     }
//   }

//   return chunked;
// }

module.exports = chunk;
