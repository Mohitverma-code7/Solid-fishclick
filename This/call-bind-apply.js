// call and apply => basic chef , they all overwrite this value
// bind => return a new function




function cookdish(ingredient, style) {
  return `${this.name} prepares ${ingredient} in ${style} style !`;
}
const vermaKitchen = {
  name: "verma ji kitchen"
};
const sharmaVerma = {
  name: "sharmaVerma ji kitchen"
};
console.log(cookdish.call(vermaKitchen, "panner and spices", "Muglai"));

// for other we use "call"




const guptaOrder = ["chole ","naan"]
console.log(cookdish.apply(sharmaVerma, guptaOrder));

// when we have to use array we use "apply"



const bil = [10,34,56,76,345]

Math.max.apply(null, bil)
Math.max(...bil)



function reportDelivery (location ,status){
    return`${this.name} at ${location}: ${status} ` 
}



const deliveryBoy ={ name:"Ranveer"};
console.log("call:", reportDelivery.call(deliveryBoy, "Lyari","single"));
console.log("apply:", reportDelivery.apply(deliveryBoy, ["Mars","Randwa"]));
console.log("Bind:", reportDelivery.bind(deliveryBoy, "Haridwar","lotee mein"));

const bindReport = reportDelivery.bind(deliveryBoy, "Haridwar","lotee mein");
console.log(bindReport());
