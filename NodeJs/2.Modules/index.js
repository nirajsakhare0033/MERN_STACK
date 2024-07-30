//this will allows us to use that function from
//that (index.js) file, and we can use it right here.
//getting that data from other file here
const greet = require("./greet");
greet("niraj");

const { person1, person2, person3 } = require("./peoples");
greet(person1);
greet(person2);
greet(person3);
console.log(person1);
console.log(person2);
console.log(person3);
