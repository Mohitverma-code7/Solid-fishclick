console.log(this);

function ranveerGalobalStage() {
  return typeof this;
}
console.log(ranveerGalobalStage());

function ranveerWithNoScript() {
  "use strict";
  return this;
}
console.log(ranveerWithNoScript());

const bollywood = {
  name: "Dahnu",
  lead: "vijay",

  introduce() {
    return `${this.lead} performs in ${this.name}`;
  },
};
console.log(bollywood.introduce());

const filmDirector = {
  name: "Sanjay",
  cast: ["ranveer", "vijay", "sondaraya"],

  announceCast() {
    this.cast.forEach((actor) => {
      console.log(`${this.name} introduce ${actor}`);
    });
  },
};
filmDirector.announceCast();

const filmSet = {
  crew: "spot boys",
  prepareProps() {
    console.log(`outer this crew : ${this.crew}`);
    function arrangement() {
      console.log(`INNNER this.crew : ${this.crew}`);
    }
    arrangement();

    arrangeLight = () => {
      console.log(`Arraw this.crew : ${this.crew}`);
    };
    arrangeLight();
  },
};
filmSet.prepareProps();

// detached method

const actor = {
  name: "ranveer",
  bow() {
    return `${this.name} takes a bow`;
  },
};

const detachedBow = actor.bow;
console.log(detachedBow());

// notes
// this ka global state kya hota hai
// this apna sath kya lakar ataa hai
// 1) this kaha run ho raha hai, browser me run hoga to to window obj dega and agr kisi environment me run hoga to obj.
// 2)type of this  is obj , if use "use strict" then undefined will be.
// 3)normal function ke under agr this use krege hai to vo variable ka reference leta hai.
// 4)normal function me under agr nested regural hn hai tb this ke pass variable ka access nhi hoga.
// 5)But if there is an arrow fn inside normalfn then, this variable ka reference lega.
// 6)detached method me bhi this variable ka refernce nhi leta
