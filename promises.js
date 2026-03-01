// function preparedish (dish, cb){
//     setTimeout(() => cb(null, {dish, status: "prepared"}) , 80 )
// }

// preparedish("Dal chawal", (err, dish) => {
//     if (err) {
//         return console.log(err);   
//     }
// })











// // promise phases : pending , fulfilled, rejected

// function prepareOrder(dish){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(!dish){
//                 reject(new Error("No dish is there"))
//             }
//             console.log(`${dish} is ready`);
//             resolve({dish , status: "prepared"})
//         }, 100);
//     })
// }
// function pickupOrder(order){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(!order){
//                 reject(new Error("No dish is there"))
//             }
//             console.log(`${order} is ready`);
//             resolve({...order , status: "pickedUp"})
//         }, 100);
//     })
// }
// function deliverOrder(order){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(!order){
//                 reject(new Error("No dish is there"))
//             }
//             console.log(`${order} is ready`);
//             resolve({...order , status: "delevired"})
//         }, 100);
//     })
// }

// prepareOrder("panner Tikka")
// .then(order => pickupOrder(order))
// .then(order => deliverOrder(order))
// .catch()








// prepareOrder("chai")
// .then(order => {

// }) 





/*
const promise = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("chaicode")
        rej( new Error ("chaicode"))
    },1000)
});
*/


// setTimeout(()=>{
//     console.log(promise);
    
// },3000)



// promise.then((value)=> {
//     console.log(value);
    
// })


// promise
//      .then(console.log)
//      .then(console.log)
//      .catch((error)=> console.log(error));







// const turant = Promise.resolve("turant")
// console.log(turant);


// const allPromise = Promise.all([
//     Promise.resolve("chai"),
//     Promise.resolve("code")
// ])
// allPromise.then(console.log
// )




// function boilWater(ms) {
//     return new Promise(( res, rej) => {
//         console.log("pani rakha hai abhi wait kro");
//         if (typeof ms !== "number" || ms < 0) {
//             rej( new Error("ms must be in number and greater then zero"))
//         }
//         setTimeout(()=> {
//             res("pani ubal gya hai aa kar nha lo");
//         },ms)
//     })
// }

// boilWater(200)
// .then((msg)=> console.log("Resolved: ",msg))
// .catch((err)=> console.log("Rejected:",err.msg) )






// const gfPromise = Promise.resolve("gr is already outside");
// console.log(gfPromise);

// gfPromise.then(result => {
//     console.log(result);
    
// })


// const gfPromise = Promise.reject("papa ghar par hai");
// gfPromise.catch(error => {
//     console.log(error);
    
// })

// const chocolate = new Promise(resolve => {
//     setTimeout(() => resolve("chocolate"),2000)
// })
// const hug = new Promise(resolve => {
//     setTimeout(() => resolve("hug"),1000)
// })
// const kiss = new Promise(resolve => {
//     setTimeout(() => resolve("kiss"),3000)
// })

// Promise.all([chocolate,hug,kiss])
// .then(result => {
//     console.log(result);
    
// })


// const chocolate = Promise.resolve("chocolate");
// const hug = Promise.reject("No hug");

// Promise.allSettled([chocolate,hug])
// .then(result => {
//     console.log(result);
    
// })



// const slowReply = new Promise(resolve => {
//     setTimeout(()=> resolve("reply after 5 sec"),5000)
// })
// const fastReply = new Promise(resolve => {
//     setTimeout(()=> resolve("reply after 1 sec"),1000)
// })
// Promise.race([slowReply,fastReply])
// .then(result => {
//     console.log(result);
    
// })



// const call1 = Promise.reject("Busy");
// const call2 = Promise.reject("Busy again");
// const call3 = Promise.resolve("picked");
// Promise.any([call1,call2,call3])
// .then(result => {
//     console.log(result);
// })


// Promise.resolve("GF arrived ❤️")
// .then(result => {
//   console.log(result);
// });

// const gfPromise = new Promise(function(resolve, reject) {

//   setTimeout(function() {
//     reject("GF didn't come 😭");
//   }, 2000);

// });

// gfPromise.catch(function(error) {
//   console.log(error);
// });



// Fake API function to simulate async work
function fakeAPI(name, delay, shouldFail = false) {
  return new Promise((resolve, reject) => {

    console.log(`Request started: ${name}`);

    setTimeout(() => {

      if (shouldFail) {
        reject(`${name} failed `);
      } else {
        resolve(`${name} success `);
      }

    }, delay);

  });
}


// Create promises
const p1 = fakeAPI("User API", 1000);
const p2 = fakeAPI("Post API", 2000);
const p3 = fakeAPI("Comment API", 1500, true);



/* ============================
   INSTANCE METHODS
============================ */

// .then()
p1.then(result => {
  console.log("then:", result);
})

// .catch()
.catch(error => {
  console.log("catch:", error);
})

// .finally()
.finally(() => {
  console.log("finally: User API finished");
});



/* ============================
   STATIC METHODS
============================ */

// Promise.resolve()
Promise.resolve("Instant success")
.then(res => console.log("resolve:", res));


// Promise.reject()
Promise.reject("Instant reject")
.catch(err => console.log("reject:", err));


// Promise.all()  → fails if any fails
Promise.all([p1, p2])
.then(res => console.log("all:", res))
.catch(err => console.log("all error:", err));


// Promise.allSettled() → always returns all results
Promise.allSettled([p1, p2, p3])
.then(res => console.log("allSettled:", res));


// Promise.race() → first completed wins
Promise.race([p1, p2, p3])
.then(res => console.log("race:", res))
.catch(err => console.log("race error:", err));


// Promise.any() → first success wins
Promise.any([p3, p1, p2])
.then(res => console.log("any:", res))
.catch(err => console.log("any error:", err));



/* ============================
   ADVANCED INSTANCE CHAINING
============================ */

fakeAPI("Payment API", 1200)

.then(res => {
  console.log("step 1:", res);
  return fakeAPI("Invoice API", 1000);
})

.then(res => {
  console.log("step 2:", res);
  return "Final Result";
})

.then(res => {
  console.log("step 3:", res);
})

.catch(err => {
  console.log("chain error:", err);
})

.finally(() => {
  console.log("Chain finished");
});