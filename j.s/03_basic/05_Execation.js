// {} global Execation

// 1. global Execation
// 2. funcation Execation

// {}->memory creation phase
//  -> execution phase

let val1 = 10;
let val2 = 5;

function addNum(num1, num2) {
  let total = num1 + num2;
  return total;
}
let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);

// step

// 1. global execation
// 2. this
// 3. memory phase
//    val1=> undefined
//    val2=> undefined
//    addnum=> defination
//   result1=> undefined
//   result2=> undefined
// 4. execution phase
//   val1=> 10
//   val2=>5
//  addnum=> new variable covitonment + excecution thread
