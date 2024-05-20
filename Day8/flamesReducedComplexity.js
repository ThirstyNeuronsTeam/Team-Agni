function convertToLetters(name) {
  const firstNameLetters = name.split("");
  return firstNameLetters;
}

function convertToCounterObject(name) {
  const letters = convertToLetters(name);
  const counter = {};
  //counter = {"a":1,"j":1}
  letters.forEach((letter) => {
    counter[letter] = (counter[letter] || 0) + 1;
  });
  return counter;
}

function findLettersCount(fN, sN) {
  //converting Ajith to object
  const counterF = convertToCounterObject(fN.toLowerCase());
  //converting halini to Object
  const counterS = convertToCounterObject(sN.toLowerCase());

  //console.log(counterF)
  //console.log(counterS)

  const keys = Object.keys(counterF);
  console.log("printing the keys");
  console.log(counterF);
  console.log(keys);

  let totalUncommonCharacters = fN.length + sN.length;

  keys.forEach((key) => {
    const ifSameKeyPresentInSecondName = counterS[key]
    if (ifSameKeyPresentInSecondName) {
      const commonLetterCount = Math.min(counterF[key], counterS[key])
      totalUncommonCharacters =  totalUncommonCharacters - 2 * commonLetterCount;
    }
  });

  return totalUncommonCharacters;
}

function getLetters(letter, len = 1000000) {
  const array = Array.from({ length: len }, () => letter);
  return array.join("");
}

console.time();
const letterCount = findLettersCount("Aaajjith", "Shalini");
console.timeEnd();
console.log(letterCount);
