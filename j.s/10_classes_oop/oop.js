const user = {
  userName: "vikas",
  login: 8,
  signedIn: true,

  getuser: function () {
    // console.log("Got us details from");
    // console.log(`Username: ${this.userName}`);
    console.log(this);
  },
};

// console.log(user.login);
// console.log(user.getuser());
// console.log(this);

// - constructor function method

function User(username, loginCount, isLoggedIn) {
  this.userName = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`welcome ${this.userName}`);
  };

  return this;
}

const one = new User("hitesh", 12, true); // use the
const two = new User("vikas", 12, false);
// console.log(one, two);
