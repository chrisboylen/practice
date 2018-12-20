// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let letCount = {};
  let max = 0;
  let maxChar = "";

  str.split("").forEach(char => {
    if (!letCount[char]) {
      letCount[char] = 1;
    } else {
      letCount[char] += 1;
    }
  });

  for (let char in letCount) {
    if (letCount[char] > max) {
      max = letCount[char];
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;
