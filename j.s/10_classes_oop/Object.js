function multiple(num) {
  return num * 5;
}

multiple.power = 2;

console.log(multiple(5));
console.log(multiple.power);
console.log(multiple.prototype);

function create(username, score) {
  this.username = username;
  this.score = score;
}
create.prototype.increment = function () {
  this.score++;
};

create.prototype.print = function () {
  console.log(`score is ${this.score}`);
};

const vikas = new create("chai", 25);
const tea = new create("chai", 250);

vikas.print();
