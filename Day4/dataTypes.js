let a = 45; //primitive

let newA = a;

newA = 50;

console.log(a, newA);

/* const b = 45

const newB = b;

newB = 50;

console.log(b,newB) */

const b = { //non primitive or reference
  age: 45,
};

const newB = b;
newB.age = 50;

console.log(b,newB)

const movieNames = ["Kabali", "1947 love story","Dhilse"]
//movieNames ={0:"Kabali",1:"1947...",2:"Dhilse"}

const newMovieNames = movieNames;
newMovieNames[0] = "Pushpa"

console.log(movieNames,newMovieNames)






