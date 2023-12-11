const name = "hitesh";
const repoCount = 50;

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("hiteshshhcg");
console.log(gameName[0]);
console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4));

// console.log(gameName.indexOf("t"));

const newString = gameName.substring(0, 4);
console.log(newString);

const slice = gameName.slice(-8, 4);
console.log(slice);

const trim = "            vikas     ";
console.log(trim);
console.log(trim.trim());

const url = "https://vikas.com/vikash%20trivedi";

console.log(url.replace("vikash", "vikas"));

console.log(url.includes("milan"));

console.log(gameName.split("-"));
