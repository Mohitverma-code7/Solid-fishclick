const prithviraj = {
    name: "prithviraj",
    generation: "grandfather",
    cookTriditinalDish(){
        return `${this.name} cooks sn snicent family meal`
    },
};

const raj = Object.create(prithviraj);
raj.name = "raj"
raj.generation= "father"
raj.runBusiness = function(){
    return`${this.name} runs the family buisness`
}
console.log(raj);


const ranbir = Object.create(raj)
ranbir.name = "ranbir"
ranbir.generation = "son"
ranbir.makeFilm = function (){
    return ` ${this.name} directs movies`
}


console.log(ranbir.makeFilm());
console.log(ranbir.runBusiness());
console.log(ranbir.cookTriditinalDish());


// itnheritance
// khud ka foreach 
// khud ka reduce
// khud ka map

// write a polyfil for foreach, reduce, map ,filter ,flat