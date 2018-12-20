// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let result = "";

  str.split("").map((char, i) => {
    if (i === 0) {
      result = char.toUpperCase();
    }

    if (str[i - 1] === " ") {
      result += char.toUpperCase();
    } else if (i !== 0) {
      result += char;
    }
  });

  return result;
}
// function capitalize(str) {
//   return str
//     .split(" ")
//     .map(word => {
//       return word[0].toUpperCase() + word.slice(1);
//     })
//     .join(" ");
// }

module.exports = capitalize;
