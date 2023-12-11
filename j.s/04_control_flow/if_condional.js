// if

// conditional apply hogi
if (true) {
}

// conditional apply nhi hogi
if (false) {
}

const isUserloggedIn = true;
const tem = 41;

// if (tem === 40) {
//   console.log("executed");
// } else {
//   console.log("temperature is grater than 50");
// }
// <,>,<=,>=,==,!=,===, !==,

// const score = 250;

// if (score > 100) {
//   const power = "fly";
//   console.log(`user power: ${power}`);
// }

// const balance = 1000;

// if (balance >= 1000) console.log("test");

// if (balance < 500) {
//   console.log("less than 500");
// } else if (balance < 750) {
//   console.log("less than 750");
// } else if (balance < 900) {
//   console.log("less than 900");
// } else {
//   console.log("less than 1200");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInfromGoogle = false;
const loggedInfromEmail = true;

if (userLoggedIn && debitCard && 2 == 2) {
  console.log("allow to buy course");
}

if (loggedInfromGoogle || loggedInfromEmail) {
  console.log("user logged in");
}

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
val1 = undefined ?? 15;
console.log(val1);

// && or sabhi value true honi chaiye
// || or or sabhi value me se koi bhi value true honi chaiye
// nullish coalescing operator (??); null underfined

// Terniary Operator

// condition ? true : false

const ice = 100;
ice >= 80 ? console.log("less than 80") : console.log("more than 80");
