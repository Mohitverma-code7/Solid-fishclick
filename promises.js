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




function boilWater(ms) {
    return new Promise(( res, rej) => {
        console.log("pani rakha hai abhi wait kro");
        if (typeof ms !== "number" || ms < 0) {
            rej( new Error("ms must be in number and greater then zero"))
        }
        setTimeout(()=> {
            res("pani ubal gya hai aa kar nha lo");
        },ms)
    })
}

boilWater(200)
.then((msg)=> console.log("Resolved: ",msg))
.catch((err)=> console.log("Rejected:",err.msg) )













