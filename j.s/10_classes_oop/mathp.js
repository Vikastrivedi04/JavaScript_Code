const descipter = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descipter);
// console.log(Math.PI);

const vikas = {
  name: "vikas trivedi",
  price: "230",
  isAvailable: true,

  order: function () {
    console.log("vikas ");
  },
};

console.log(Object.getOwnPropertyDescriptor(vikas, "name"));

// Object.defineProperty(vikas, "name", {
//   writable: false,
//   enumerable: false,
// });
// console.log(Object.getOwnPropertyDescriptor(vikas, "name"));

for (let [key, value] of Object.entries(vikas)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}
