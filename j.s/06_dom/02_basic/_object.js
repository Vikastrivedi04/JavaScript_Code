// singleton
// Object.create

// Object literals

const mySym = Symbol("key1");

const user = {
  name: "hitesh",
  age: "18",
  [mySym]: "mykey1",
  location: "deesa",
  email: "vikas@google.com",
  isLoggedIn: false,
  last: ["monday", "statuday"],
};

console.log(user.name);
console.log(user[("name", "location")]);
console.log(user[mySym]);

user.email = "vikas@123";
// Object.freeze(user);

user.greeting = function () {
  console.log("hello");
};

user.greetingtwo = function () {
  console.log(`hello js,${this.name} `);
};

console.log(user.greeting);
console.log(user.greetingtwo());
