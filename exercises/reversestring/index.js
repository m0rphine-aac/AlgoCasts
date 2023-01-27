// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split('').reduce((reversed, character) => character + reversed, '');
}

// function reverse(str) {
//   if (str.length === 1) return str;

//   return reverse(str.slice(1)) + str[0];
// }

// function reverse(str) {
//   let reversed = '';

//   // 'hello' => 'h' + '' => 'e' + 'h' => 'l' + 'eh' => 'l' + 'leh' => 'o' + 'lleh' => 'olleh'
//   for (let character of str) {
//     reversed = character + reversed;
//   }

//   return reversed;
// }

// function reverse(str) {
//   return str.split('').reverse().join('');
// }

module.exports = reverse;
