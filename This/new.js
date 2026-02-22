
function TataCar(chassiNumber, modelName){
    this.chassiNumber = chassiNumber
    this.modelName = modelName
    this.fuelLevel = 100
}






TataCar.prototype.status = function (){
    return `Tata ${this.modelName} #${this.chassiNumber} | Fuel: ${this.fuelLevel}`
}

const car1 = new TataCar("MH-01","nexon")
console.log(car1.status());








// why we use new keyword
// step 1 : they make new empty object at here
// function TataCar(chassiNumber, modelName){
//   .......here,,,,,,,,,,,,,,,,,
//   .......this........
//     this.chassiNumber = chassiNumber
//     this.modelName = modelName
//     this.fuelLevel = 100
// }
// step 2 : is empty object or TataCar ke prototype ko link keye jata hai 
// step 3 : then this keyword activate after here it is exicuted
// step 4 : new ka final ka object ko return karna hota hai 

// Step 1: brand new object is created {}

// Step 2: every function has a prototype. Even the object itself also has prototype
// we LINK both of them together 

// Step 3: now comes “this”, whoever calls it will bind with caller reference.
// bind “this” to new object

// Step 4: automatically the newly created object is returned by the Constructor
// Explicit return of object












// Factory function

function autoRickshaw (id,route){
    return {
        id,
        route,
        run(){
            return`Auto ${this.id} running on ${this.route}`
        }
    }
}
const auto1 = autoRickshaw("UP-1", "LONDON")
const auto2 = autoRickshaw("UK-1", "USA")

console.log(auto1.run());
console.log(auto2.run());


