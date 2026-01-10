// const { version } = require("react");

// function one() {
//     const username = "hitesh";

//     function two() {
//         const website = "youtube";
//         // console.log(username);
//     }

//     // console.log(website);                //website is not defined

//     two();
// }

// one();
// --------------------------------------TASK1---------------------------------
// Create a global variable and access it inside a function.


let appName = "MyApp";

function showApp(){
    let version = "1.0";

    // console.log(appName);      printed
    // console.log(version);      printed 
}

// console.log(appName);
// console.log(version);   not defined
showApp()


// ----------------------------TASK2-------------------------------
// Declare two variables with the same name:


let fileName = "Main file"

function showUser (){
    let fileName = "Other file"
    // console.log(fileName);
    
}
showUser()
// console.log(fileName);


// -----------------------------------TASK3-----------------------------
// Create an object with a method that logs this.
// What does this refer to?


const chai = {
    username:"mohit",
    price:900,

    welcomeMessage : function() {
        // console.log(this);
        
    }
}
chai.welcomeMessage()



// ------------------------------TASK4-------------------------------------------
// Convert the same method into an arrow function.
// What happens to this?


const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(5,8));
