// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n, cache = {}) {
  if (cache[n]) {
    return cache[n];
  }

  if (n <= 2) {
    cache[n] = 1;
    return 1;
  }

  cache[n] = fib(n - 1, cache) + fib(n - 2, cache);

  return cache[n];
}

// Recursive Solution With Memoization
// function memoize(fn) {
//   const cache = {};

//   return function (...args) {
//     if (cache[args]) {
//       return cache[args];
//     }

//     const result = fn.apply(this, args);
//     cache[args] = result;

//     return result;
//   };
// }

// function fib(n) {
//   if (n <= 2) {
//     return 1;
//   }

//   return fib(n - 1) + fib(n - 2);
// }

// fib = memoize(fib);

// Recursive Solution
// function fib(n) {
//   if (n <= 2) {
//     return 1;
//   }

//   return fib(n - 1) + fib(n - 2);
// }

// Iterative Solution
// function fib(n) {
//   const result = [0, 1];

//   for (let i = 2; i <= n; i++) {
//     result[i] = result[i - 1] + result[i - 2];
//   }

//   return result[n];
// }

// Iterative Solution
// function fib(n) {
//   let a = 1;
//   let b = 1;
//   let c;

//   if (n <= 2) {
//     return 1;
//   }

//   for (let i = 2; i < n; i++) {
//     c = a + b;
//     a = b;
//     b = c;
//   }

//   return c;
// }

module.exports = fib;
