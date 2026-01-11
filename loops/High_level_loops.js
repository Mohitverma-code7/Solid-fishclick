
//    1. for of


const value = "Hello, World!"

for (const element of value) {
    // console.log(`the current character is: ${element}`);
}

// -------------------------------------------------m------------------------------------------

const Value = "Hello, World!"

for (const element of Value) {
    // console.log(`the current character is: ${element}`);
}

// --------------------------------------------------------------m------------------------------------------------

const map = new Map([
    ["name", "Alice"],
    ["age", 30],
    ["city", "New York"]
]);

//console.log(map); // Output: 3


for (const element of map) {
    // console.log(element);
    
    
}

// ----------------------------------------------------------------m------------------------------------------------
for (const key of map) {
    // console.log(key);
}

// ---------------------------------------------------------------m-------------------------------------------------


for (const [key, value] of map) {
    // console.log(key, ":->" , value);
}

// ---------------------------------------------------------------m--------------------------------------------------

const myobject = {
    name: "Bob",
    age: 25,
    city: "Los Angeles"
}

// for (const element of object) {
//     // console.log(element);   in this object we cant use for of loop it will give error
// }


// ---------------------------------------------------------------m--------------------------------------------------

// 2. for in

// for (const key in myobject) {
//     console.log(key);
    
// }

for (const key in myobject) {
    // console.log(key, ":-" , myobject[key]);
    
}


const arr = [10, 20, 30, 40, 50];

for (const key in arr) {
    // console.log(arr[key]);
}  

for (const file in arr) {
    // console.log(file);
}

for (const index in map) {
    // console.log(index);
    
}


// =---------------------------------------------------------------m--------------------------------------------------
// 3. while loop

const arr1 = ["apple", "banana", "cherry" , "date", "elderberry"];

arr1.forEach(  (val, index, arr) => {
    // console.log(val, index, arr);
}
)

// --------------------------------------------------m----------------------------


const myCode = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "javascript",
        languageFileName: "js"
    }
]

myCode.forEach((item)=>{
    // console.log(item);
    // console.log(item.languageFileName);
    
})