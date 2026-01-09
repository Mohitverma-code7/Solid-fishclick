// ----------------------------------------------------------------this-keyword---------------------------------------------------------------------------
// First we know about this keyword

const user = {
    username:"Mohit",
    price:999,

    welcomeMessage: function() {
        console.log(`${this.username}, Welcome to Website `);
        
    }
}
user.welcomeMessage()
user.username = "SAM"
user.welcomeMessage()

// ----output before changing the vale---
// Mohit, Welcome to Website 


// ----output after changing the vale---
// Mohit, Welcome to Website 
// SAM, Welcome to Website 



// ---------------------------------------------------------Arrow-function------------------------------------------------------


const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(4,6));

// ---------output-----------=10=------------
// we can also write this code in other ways

const addRwo = (num1, num2) =>  num1 + num2

console.log(addRwo(4,5));


// ---------output-----------=9=------------
// ----------------Another-way-----------------

const addFwo = (num1, num2) =>  ({username: "Hitesh"})

console.log(addFwo());

// ---------output-----------={ username: 'Hitesh' }=------------