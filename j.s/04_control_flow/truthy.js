const userEmail = [];

if (userEmail) {
  console.log("got user email");
} else {
  console.log("don't have user email");
}

// falsy values
// false, 0,-0,BigInt 0n, "", null, undefined, nan,

// truthy values
// "0", "false", " ", [], {}, function(){},

// if (userEmail.length === 0) {
//   console.log("Array is emapty");
// }

const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  console.log("object");
}
