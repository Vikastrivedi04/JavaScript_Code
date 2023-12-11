// let myName = "hitesh               ";
// let mychanel = "hitesh               ";

// console.log(myName.trim().length);

let muHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`spidy power is ${this.spiderman}`);
  },
};

Object.prototype.vikash = function () {
  console.log(`vikash is present in all objects`);
};
// heroPower.vikash();

Array.prototype.heyVikash = function () {
  console.log(`hitesh says hello`);
};
muHeros.vikash();
muHeros.heyVikash();

// inheritance

const User = {
  name: "vikas",
  email: "vikas@gmail.com",
};
const Teacher = {
  makeVideo: true,
};
const Teaching = {
  isAvailable: false,
};
const TAsupport = {
  make: "js",
  fullTIme: true,
  __proto__: Teaching,
};
Teacher.__proto__ = User;

// Modern syntax

Object.setPrototypeOf(Teaching, Teacher);

let another = "vikastrivedi           ";

String.prototype.trueLength = function () {
  //   console.log(`${this}`);
  console.log(`true length is : ${this.trim().length}`);
};

another.trueLength();
