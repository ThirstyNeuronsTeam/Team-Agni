function sum(a, b) {
  return a + b;
}

const result = sum(2, 3);

console.log(result);

///replace function with const
//add equal sign after function name
//then add fat arrow after arguments

const sum2 = (a, b) => {return a + b;};

const sum3 = (a, b) => (a + b);

console.log(sum3(4,5))

