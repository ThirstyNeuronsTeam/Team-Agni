/* const movieNames = ["Kabali", "1947 love story","Dhilse"]

const newMovieNames = [...movieNames]; 
newMovieNames[0] = "Pushpa"

console.log(movieNames,newMovieNames) */

const movie2Names = [
  { movieName: "Kabali", year: 2020, casts: ["Rajini", "Kamal"] },
  { movieName: "1947 love story", year: 1989 },
  { movieName: "1947 love story", year: 1989 },
];

const newMovie2Names = [...movie2Names];
const firstObject = { ...newMovie2Names[0] };
firstObject.year = 2024;
firstObject.casts.push("Ajith");

newMovie2Names[0] = firstObject;

console.log(movie2Names, newMovie2Names);

const address = {
  //Object Vairable
  doorNumber: 20,
  streetName: "Gangai Amman Kovil",
  pincode: 600045,
  cityDetails:{
    name: "Bangalore",
    isMetro:true
  }

};

const newAddress = {...address}
newAddress.streetName = "vivekananda street"
newAddress.doorNumber = 40;

const newCityDetails = {...address.cityDetails}
newCityDetails.name = "Hyderabad"

newAddress.cityDetails = newCityDetails

console.log("Address")
console.log(address,newAddress)
