const myNums = [1, 2, 3];

// const mytotal = myNums.reduce(function (acc, cur) {
//   console.log(`acc: ${acc} and cur: ${cur}`);
//   return acc + cur;
// }, 0);

// const myTotal = myNums.reduce((acc, cur) => acc + cur, 0);
// console.log(myTotal);

const ShopingCart = [
  {
    itemn: "js",
    price: "1",
  },
  {
    itemn: "py",
    price: "2",
  },
  {
    itemn: "sj",
    price: "3",
  },
  {
    itemn: "ij",
    price: "4",
  },
];

const paytoday = ShopingCart.reduce((acc, item) => acc + item.price, 0);

console.log(paytoday);
