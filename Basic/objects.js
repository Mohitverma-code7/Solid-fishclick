// // Task 1
const student = {
  name: "Mohit",
  age: 21,
  course: "CSE",
};

const studentName = student.name;
console.log(studentName);

// // Task 2
const car = {
  brand: "BMW",
  model: "BMW-M1",
  year: "1980",
};

const carModel = [car.model];
console.log(carModel);

// // Task 3
let user = {
  username: "Rahul",
  email: "mk@cpm",
};
user.email = "mh@bnng";
console.log(user);

// // Task 4
let book = {
  title: "The man",
  author: "By ME",
};
book.pages = "300";
console.log(book);
console.log("Task 5,6,7");

// // Task 5
let mobile = {
  brand: "realme",
  price: "20000",
  color: "midnight blue",
};
delete mobile.color;
console.log(mobile);

// // Task 6
let person = {
  name: "Sidhant",
  age: "34",

  greet() {
    console.log(`hello, my name is ${this.name} and my age is ${this.age}`);
  },
};
person.greet();

// // Task 7
const calculator = {
  add: function (a, b) {
    return a + b;
  },
};
const sum = calculator.add(5, 3);
console.log(sum);

console.log("Task 8,9");

// Task 8
let company = {
  name: "NVIDIA",

  address: {
    city: "2788 San Tomas Expressway, Santa Clara, CA 95051",
    country: "USA",
  },
};

let companyCity = company.address.city;
console.log(companyCity);

// Task 9

const profile = {
  username: "Mohit_re",
  followers: "34k",
};

const newProfile = profile;
newProfile.followers = "50k";
console.log(profile);
console.log(newProfile);

// assign() method

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const main = Object.assign({}, target, source);
console.log(main);

// freeze() method

const obj = {
  name: "Mohit",
};
Object.freeze(obj);

obj.name = "komal";
console.log(obj);
