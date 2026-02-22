const aadhaar_of_mayuar = Symbol("aadhaar")
const aadhaar_of_piyush = Symbol("aadhaar")

console.log(typeof aadhaar_of_mayuar);
console.log(aadhaar_of_mayuar === aadhaar_of_piyush);
console.log(aadhaar_of_mayuar.toString());
console.log(aadhaar_of_mayuar.description);

// Symbol always give unique value 

const nonIndian = Symbol()
console.log(nonIndian.description);



const biometricHash = Symbol("biometricHash")
const bloodGroup = Symbol("bloodGroup")

const citizen = {
    name: "mohit",
    age : 21,
    [biometricHash] :"yfuguiugbui",
    [bloodGroup]: "A+"
};
console.log(Object.keys(citizen));
console.log(Object.getOwnPropertySymbols(citizen));
