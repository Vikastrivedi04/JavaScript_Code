let a = 10;
const b = 20;
var c = 30;

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "vikas";

  function two() {
    const website = "youtbe";
    console.log(username);
  }
  //   console.log(website);
  two();
}

// one();

if (true) {
  const username = "vikas";
  if (username === "vikas") {
    const website = "youtube";
    // console.log(username + website);
  }
  //   console.log(website);
}
// console.log(username);

// ++++++++++++++++++++++++  Interesting +++++++++++++++

function addone(num) {
  return num + 1;
}

addone(5);

const addTwo = function (num) {
  return num + 2;
};

addTwo(5);
