//Task 1 find common letters and remove it
//Split the name and get the letters
//Task 1 find common letters and remove it
//Split the name and get the letters
/* const firstName = "Ajith";

const firstNameLetters = firstName.split("")

console.log(firstNameLetters)
 */

/* const arr =  ["a","b","i"]

const joinedWord = arr.join("");

console.log(joinedWord) */

//String - split , toLowerCase
//Array - join , map

function convertToLetters(name) {
  const firstNameLetters = name.split("");
  return firstNameLetters;
}

function addStrikeOutProperty(name) {
  const letters = convertToLetters(name);
  const lettersWithStrikeOutProperty = letters.map(
  //(letter) => {return { letter: letter, strikedOut: false };}
    (letter) => ({ letter: letter, strikedOut: false })
  );

  /* (letter) => {
    return { letter: letter, strikedOut: false };
  } */
  return lettersWithStrikeOutProperty;
}

function findLettersCount(fN, sN) {
  const firstNameArray = addStrikeOutProperty(fN.toLowerCase());
  const secondNameArray = addStrikeOutProperty(sN.toLowerCase());


  for (let outerIndex = 0; outerIndex < firstNameArray.length; outerIndex++) {
    const letterFromFirstName = firstNameArray[outerIndex];
    for (
      let innerIndex = 0;
      innerIndex < secondNameArray.length;
      innerIndex++
    ) {
      const letterFromSecondName = secondNameArray[innerIndex];

      if (
        letterFromFirstName.letter === letterFromSecondName.letter &&
        letterFromSecondName.strikedOut === false
      ) {
        letterFromFirstName.strikedOut = true;
        letterFromSecondName.strikedOut = true;
        break;
      }
    }
  }


  let letterCount = 0;

  firstNameArray.forEach(
    (letterObject)=>{
      if (letterObject.strikedOut === false) {
        letterCount = letterCount + 1;
      }
    }
  );

  secondNameArray.forEach((letterObject) => {
    if (letterObject.strikedOut === false) {
      letterCount = letterCount + 1;
    }
  });
  return letterCount;
}

function getLetters(letter, len = 1000000) {
  const array =  Array.from( { length: len }, () => letter);
  return array.join("")
}

console.time();
console.log("lets wait for the result")
const letterCount = findLettersCount(getLetters("z"), getLetters("a"));
console.log(letterCount)
console.timeEnd();


/* const fN = "Ajith"
const fNL = [{letter:"A",strikedOut:false},"j","i","t","h"]

const sN = "Shalini"
const sNL = ["S","h","a","l","i","n","i"] */

//outerIndex=0;
// Take letter from fN
// InnerIndex=0
//A==S - fail
//InnerIndex=1
//A=h-fail
//InnerIndex=2
//A=a-pass
//outerIndex=1;
// Take letter from fN
// InnerIndex=0
//j==S - fail
//InnerIndex=1
//A=h-fail
//InnerIndex=2
//A=a-pass
