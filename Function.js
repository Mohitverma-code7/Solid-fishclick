// ------------------TASK1------------------
// Create a function that prints “Hello, World!”


function printMessage(hello, world) {
    console.log("Message: " + hello + " " + world);
}
printMessage("Hello", "World");


// -------------------TASK2------------------
// Add two numbers


function addTwoNumbers(num1, num2) {
    return num1 + num2;
}
let sum = addTwoNumbers(5,7);
console.log("Sum: " + sum);


// -------------------TASK3------------------
// Find the square of a number


function squareNumber(num) {
    return num * num;
}
let squared = squareNumber(4);
console.log("Squared: " + squared);


// -------------------TASK4------------------
// Check if a number is even or odd


function evenorOdd(number){
    if (number % 2 === 0) {
        console.log(number + " is Even");
    }
    else{
        console.log(number + " is odd");
    }
}
evenorOdd((4));


// -------------------TASK5------------------
// Convert minutes to seconds


function minutesToSeconds(minutes){
    return minutes * 60
}
let seconds = minutesToSeconds(5);
console.log("Seconds: " + seconds);


// -------------------TASK6------------------
// Find the largest of two numbers


function largerNumber(num1, num2){
    if (num1 > num2) {
        // console.log("number :" + num1 + " is greater");
        return num1;
    }
    else{
        // console.log("number :" + num2 + " is greater");
        return num2;
    }
}
console.log(largerNumber(5,8));


// ----------------------TASK7-----------------
// Check if a number is positive, negative, or zero


function checkNumber(number){
    if (number > 0 ) {
        return number + " number is postive :";
    }
    else if(number < 0) {
        return number + " number is Negative :";
    }
    else if(number === 0) {
        return number + " number is Zero :";
    }
}
console.log(checkNumber(-10));


// --------------------TASK8--------------------------
// Check if a string is empty


function checkString(string){
    if (string === "" || string === undefined ) {
        return true;
    }
    else{
        return false;
    }
}
console.log(checkString());


// ------------------------TASK9---------------------
// Reverse a string


function reverseString(str){
    const strArray = str.split('');
    strArray.reverse();
    return strArray
}
console.log(reverseString('Mohit'));


// -------------------------TASK10----------------------
// Count characters in a string


function countCharacter(str){
     let length = str.length;
     return length
}
console.log(countCharacter('RAHULPANNI'));


// ------------------------TASK11-----------------------------


function numberDivisible(number){
    if (number % 5 === 0 ) {
        return true;
    }
    else{
        return false;
    }
}
console.log(numberDivisible(5));


// ----------------------------TASK12-----------------------
// Get the first element of an array


function firstElement(array){
    return array[1];
}
console.log(firstElement([200,300,500,300,5000]));


