const immer = require("immer");

console.log(immer.produce);

const address = {
  //Object Vairable
  doorNumber: 20,
  streetName: "Gangai Amman Kovil",
  pincode: 600045,
  cityDetails: {
    name: "Bangalore",
    isMetro: true,
    x: {
        y:20
    }
  },
};

const newAddress = immer.produce(address,(draft)=>{
    draft.doorNumber = 45
});

console.log(address,newAddress)
