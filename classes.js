class Cricketer {
    constructor(name , roll){
        this.name = name
        this.roll = roll
        this.matchesPlayed = 0
        this.stamina = 100
    }

    introduce(){
        return `${this.name} the ${this.roll} | matchesPlayed:${this.matchesPlayed} | stamina: ${this.stamina}`
    }
}


const player1 = new Cricketer("virat","Batsman")
const player2 = new Cricketer("MS Dhoni","Batsman")

console.log(player1.hasOwnProperty("name"));
console.log(typeof Cricketer);





class Debutant {
    constructor(name){
        this.name = name
        this.walkout = () => {
          return `${this.name} walks out for bating`
        }
    }
}

const Debutant1 = new Debutant("Shubam")
const something = Debutant1.walkout
console.log(something());
