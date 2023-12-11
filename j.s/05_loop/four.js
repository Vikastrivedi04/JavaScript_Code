const myObject = {
  js: "javascript",
  cpp: "c++",
  rb: "ruby",
  swift: "by apple",
};

for (const key in myObject) {
  console.log(`${key} short is for ${myObject[key]}`);
}

const arry = ["js", "rb", "py"];
for (const key in arry) {
  console.log(arry[key]);
}
