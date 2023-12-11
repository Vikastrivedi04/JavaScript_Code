function SetUser(username) {
  this.username = username;
}

function createUser(username, email, password) {
  SetUser.call(this.username);
  this.email = email;

  this.password = password;
}

const vikas = new createUser("chai", "chai@fb", "!23");
console.log(vikas);
