// --------------------------------------TASK1---------------------------------
// Print numbers from 1 to 10 using a for loop


for (let i = 0; i <10 ; i++) {
    const element = i;
    // console.log(element);
}


// ---------------------------------------TASK2-------------------------------------
// Print numbers from 10 to 1 using a while loop.

let i = 10
while (i >= 1) {
    // console.log(`value of i is ${i}`);
    i--;
    
}


// ---------------------------------------TASK3-----------------------------------------
// Print numbers from 1 to 5 using a do...while loop.

let score = 1;

do {
    // console.log(score);
    score++;
} while (score <= 5);


// -----------------------------------------TASK4-----------------------------------------
// Use break to stop a loop when the number reaches 5.


for (let i = 0; i < 20 ; i++) {
    if (i === 5) {
        break;
    }
    // console.log(i);
    
}


// -----------------------------------------------TASK5-------------------------------------\
// Use continue to skip even numbers in a loop.


for (let i = 0; i < 40; i++) {
    if (i % 2 === 0) {
        continue
    }
    console.log(i);
    
}