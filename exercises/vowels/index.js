// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  return str.match(/[aeiou]/gi)?.length ?? 0;
}

// function vowels(str) {
//   let ans = 0;

//   for (let char of str.toLowerCase()) {
//     if (['a', 'e', 'i', 'o', 'u'].includes(char)) {
//       ans++;
//     }
//   }

//   return ans;
// }

module.exports = vowels;
