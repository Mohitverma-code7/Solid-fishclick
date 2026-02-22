function preparedish (dish, cb){
    setTimeout(() => cb(null, {dish, status: "prepared"}) , 80 )
}

preparedish("Dal chawal", (err, dish) => {
    if (err) {
        return console.log(err);   
    }
})











// promise phases : pending , fulfilled, rejected

function prepareOrder(dish){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!dish){
                reject(new Error("No dish is there"))
            }
            console.log(`${dish} is ready`);
            resolve({dish , status: "prepared"})
        }, 100);
    })
}
function pickupOrder(order){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!order){
                reject(new Error("No dish is there"))
            }
            console.log(`${order} is ready`);
            resolve({...order , status: "pickedUp"})
        }, 100);
    })
}
function deliverOrder(order){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!order){
                reject(new Error("No dish is there"))
            }
            console.log(`${order} is ready`);
            resolve({...order , status: "delevired"})
        }, 100);
    })
}

prepareOrder("panner Tikka")
.then(order => pickupOrder(order))
.then(order => deliverOrder(order))
.catch()








// prepareOrder("chai")
// .then(order => {

// }) 


