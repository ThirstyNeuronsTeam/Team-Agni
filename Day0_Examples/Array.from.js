const evenNumbers = [];

for (let index = 0; index < 50; index = index + 1) {
  evenNumbers.push((index + 1) * 2);
}

//console.log(evenNumbers)
console.log(Array.from({ length: 50 }, (_, i) => (i + 1) * 2));

//Array.from can be used as split function
console.log(Array.from("javascript"))

//Array.from can be used like map function
console.log(Array.from(["senthil","meghana","astha","vaithy"],(name)=>name.length))

/* two point

(x1,y1) (x2,y2)

(0,2) (1,4)

(x-x1)/(x2-x1) = (y-y1)/(y2-y1)
(x-0) = (y-2)/(2)

x = (y-2)/2

(y-2)/2= x

y-2 = 2x

y = 2x+2
y = (x+1)*2 */
