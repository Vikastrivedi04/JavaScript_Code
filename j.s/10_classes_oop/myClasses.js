// ES6

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abs`;
  }
  changeUserName() {
    return `${this.username.toUpperCase()}`;
  }
}

const vikas = new User("vikas", "gmail.com", "123");
console.log(vikas.encryptPassword());
console.log(vikas.changeUserName());
