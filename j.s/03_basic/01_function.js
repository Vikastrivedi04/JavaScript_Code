function savemyName() {
  console.log("v");
  console.log("i");
  console.log("k");
  console.log("a");
  console.log("s");
}

// savemyName();

// function add2Numbers(number1, number2) {
//   console.log(number1 + number2);
// }

function add2Numbers(number1, number2) {
  let result = number1 + number2;
  return result;
}

const result = add2Numbers(3, 4);

// console.log("Result:", result);

function login(username, password) {
  if (username === undefined) {
    console.log("plz enter a username");
    return;
  }
  return `${username} ${password} just logged in`;
}

// console.log(login("vikas", "password"));
// console.log(login());

function calculateCartPrice(...num1) {
  /// ...num1: res opertoer
  return num1;
}

// console.log(calculateCartPrice(200, 400));

const user = {
  username: "hitesh",
  price: 199,
};

function handle(anyobject) {
  console.log(
    `username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

// handle(user);
handle({
  username: "vikas",
  price: 400,
});

const myNewArray = [200, 300, 400, 500];

function retrunSecond(getArray) {
  return getArray[2];
}

console.log(retrunSecond(myNewArray));
