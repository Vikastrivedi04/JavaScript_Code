// Dates

let myDate = new Date();
console.log(myDate.toString());

console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());

let my = new Date(2023, 12, 4);
console.log(my);

let mySet = Date.now();

console.log(mySet);
// console.log(mySet.getTime());
console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate.getMilliseconds);

newDate.toLocaleString("default", {
  weekday: "long",
});
