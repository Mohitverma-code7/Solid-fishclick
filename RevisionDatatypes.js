// Primitive DataTypes

const StringName = "MohitKumar"; //string
const NumberValue = 45; //Number
const fileName = true; //boolean
const peakValue = null; //null
const roundValue = undefined; //undefined
let id = Symbol("id"); //symbol
const bigValue = 67565672562562876236778n; //BigInt

console.table({ StringName, NumberValue, fileName, peakValue, roundValue, id });

// Non-primitive

const mainArray = ["Mohit", 25, 34, 53, 35, 35, 36, "Rahul"]; //Array
console.table(mainArray);

const Name = {
  name: "Priya",
  age: 21, //Object
};

console.table({ Name });

const myFunction = function () {
  console.log("My name is _____");
};

myFunction();

var x = 10;
console.log(x);

x = 20; // value changed
console.log(x); // 20
