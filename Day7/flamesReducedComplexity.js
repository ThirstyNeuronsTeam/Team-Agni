function convertToLetters(name) {
  const firstNameLetters = name.split("");
  return firstNameLetters;
}

function convertToCounterObject(name, counter = {}) {
  const letters = convertToLetters(name);
  letters.forEach((letter) => {
    counter[letter] = (counter[letter] || 0) + 1;
  });
  return counter;
}

function findLettersCount(fN, sN) {
  const counterF = convertToCounterObject(fN.toLowerCase());
  const counterS = convertToCounterObject(sN.toLowerCase());

  const keys = Object.keys(counterF);
  let totalUncommonCharacters = fN.length + sN.length;

  keys.forEach(
    (key) =>
      counterS[key] &&
      (totalUncommonCharacters -= 2 * Math.min(counterF[key], counterS[key]))
  );

  return totalUncommonCharacters;
}

function getLetters(letter,len=1000000)
{
  return Array.from({length: len}, (_, i) => letter).join("")
}
console.time();
const letterCount = findLettersCount(getLetters("z"), getLetters("a"));
console.timeEnd();
console.log(letterCount);


