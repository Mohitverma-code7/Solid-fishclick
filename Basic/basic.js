// console.log("my name is mohit ");

// // primitive datatypes
// let a = "ram"; // string
// let isLogin = true; // bolean
// let x; // Undefined
// let y = null; // Null
// let m = 56; // Number
// let big = 1234567890123456789n; // BigInt
// let id = Symbol("id"); // Symbol

// console.log(a, "TYPE:", typeof a);
// console.log(isLogin, "TYPE:", typeof isLogin);
// console.log(x, "TYPE:", typeof x);
// console.log(y, "TYPE:", typeof y);
// console.log(m, "TYPE:", typeof m);
// console.log(big, "TYPE:", typeof big);
// console.log(id, "TYPE:", typeof id);

// non-primitive datatypes

// let student = {
//   name: "mohit", // Object
//   age: 21,
// };

// console.log(student, "TYPE:", typeof student);


// console.log("TEST STARTED");
// const fuelReading = "142.468 tons"
// const nameRead = "0XA3"
// console.log(parseFloat(fuelReading))



// const thrustForce = 4.5674;

// console.log(Math.round(thrustForce))
// console.log(Math.floor(thrustForce))
// console.log(Math.ceil(thrustForce))
// console.log(Math.trunc(thrustForce))


// const mainHead = [34,-567,65,223,90];
// console.log(Math.max(...mainHead))



// function mainFile(a,b) {
//   return Math.abs(a-b) < Number.EPSILON;
// }
// console.log(mainFile (0.1+0.2 ,0.3));



// const stringMain = "My Name is mohit"
// const stringMains = ["My" , "Name is mohit"]
// const main = '67'
// console.log(stringMain.toUpperCase());
// console.log(stringMain.toLowerCase());
// console.log(stringMain.trim());
// console.log(stringMain.toLowerCase().includes("mohit"));
// console.log(stringMain.split());
// console.log(stringMains.join());
// console.log(stringMain.replace("My", "your"));
// console.log(stringMain.repeat(4));
// console.log(stringMain.indexOf("Name"));
// console.log(main.padStart(6,"0"));
// console.log(main.padEnd(6,"0"));




// -------------------------------------array-------------------------------



// let arr = ["apple", "banana", "mango","orange"];
// arr.push("lichi");
// console.log(arr)
// yeh Array ke end mein Element add karta hai


// arr.pop(1)
// console.log(arr);
// yeh Array ke end se Element delete karta hai 


// arr.unshift("lichi")
// console.log(arr);
// yeh array ke start mein Element add karta hai 


// arr.shift()
// console.log(arr);
// yeh array ke start mein se element delete karta hai 


// console.log(arr.length);
// yeh Array ke size ka length batata hai 


// console.log(arr.includes("banana"))
// yeh check krta hai ki element exist karta hai ja nhi 


// console.log(arr.indexOf("mango"))
// yeh array mein Element ka indx batata hai 


// let arr1 = ["apple", "banana", "mango", "orange"];
// let newArr = arr1.slice(1,3);
// console.log(newArr);
// yeh orignal array ka copy bnata hai or original to change nhi karta edit ke time 


// let arr2 = ["apple", "banana", "mango"];
// arr2.splice(1,1);
// console.log(arr2);
// yeh array mein addEventListener,remove,change karta hai 


// let num = [2,4,8,16,32];
// let result = num.map(x => x*6);
// console.log(result)
// yeh ik new array bnata hai jisme tum log kuch bhi kar sakte ho 


// let mainNum = [40,12,56,4,6,2,34,4,5,86,34,97,23]
// let result = mainNum.filter(x => x>20)
// console.log(result)
// yeh filter method condition match karta hai 


// let nums = [10,20,30.12,17,16];
// let result = nums.find(x => x > 15);
// console.log(result);
// yeh array mein first matching element ko deta hai 



// let array = ["apple","banana"];
// array.forEach(items => {
//   console.log(items)
// })
// yeh loop hai jo hum array ke andar use karte hai 


// let a = [1,2,3]
// let b = [4,5,6]
// let result = a.concat(b)
// console.log(result)
// yeh arrays ko join karne ka kaam karta hai 


// let a = [1,2]
// let b = [...a , 3,4]
// console.log(b)


// const myArray = [1,2,3,4,5,6,7,8,9]

// const sumOfNumber = myArray.reduce(function (acc , cur) {
//   return acc + cur;
// },0)
// console.log(sumOfNumber)











// ---------------------------objects---------------------------



const user = {
  name: "Mohit",
  age: 21,
  city: "Delhi"
};

// console.log(Object.keys(user));
// console.log(Object.values(user));
// user.name = "rahul"
// console.log(Object.values(user));
// Object.keys sare keys deta hai or Object.values saab keys ki values deta hai 


// console.log(Object.entries(user))
// Object.entries mein yeh key aur value dono deta hai sath mein



// const mainContent = {
//   file : "Right valuye pair"
// }
// const result = Object.assign(user ,mainContent);
// console.log(result)
// is method mein objects ko merge kiya jata hai 



// const newuser = {...user , role: "faltu ka developer"}
// console.log(newuser);
// yeh Objects ko copy or merge karne ka kaam karta hai 



// console.log(user.hasOwnProperty("name"));
// yeh method check karta hai ki given property exist karti hai ja nhi 



// Object.freeze(user)
// user.age = 45;
// console.log(user)
// yeh method object to freeze karne ke liye use hota hai 


// Object.seal(user)
// user.age = 34;
// user.country = "US";
// console.log(user)
// is method mein ham object ko baas modify kar sakte hai , na to koi new element add kar sakte hai na hi koi element delete kar sakte hai



// const arr1 = [
//   ["name", "Mohit"],
//   ["age", 21]
// ];
// const result = Object.fromEntries(arr1);
// console.log(result)
// yeh method entries ko object mein convert karta hai 



const berozgar = {
  greet() {
    console.log("hello")
  }
};

const result = Object.create(berozgar);
result.greet();