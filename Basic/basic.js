console.log("my name is mohit ");

// primitive datatypes
let a = "ram"; // string
let isLogin = true; // bolean
let x; // Undefined
let y = null; // Null
let m = 56; // Number
let big = 1234567890123456789n; // BigInt
let id = Symbol("id"); // Symbol

console.log(a, "TYPE:", typeof a);
console.log(isLogin, "TYPE:", typeof isLogin);
console.log(x, "TYPE:", typeof x);
console.log(y, "TYPE:", typeof y);
console.log(m, "TYPE:", typeof m);
console.log(big, "TYPE:", typeof big);
console.log(id, "TYPE:", typeof id);

// non-primitive datatypes

let student = {
  name: "mohit", // Object
  age: 21,
};

console.log(student, "TYPE:", typeof student);
