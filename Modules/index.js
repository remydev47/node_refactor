//This Are ways to pass our CODE from one File Another Which Allowa Us to REUSE our Code
//and not Write it from Time To Time

//Thi swilll allow us to use the Function from 
//that (index.js) file and we can use it Right Here
const greet = require("./greet");
const {person1, person2, person3 } = require("./peoples")
greet(person1)
greet(person2)
greet(person3)
console.log(person3);
//greet("Brian Remmy");