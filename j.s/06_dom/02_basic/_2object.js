// const tinderUser = new Object();

const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regular = {
  name: {
    user: {
      firtName: "vikas",
      lastname: "trivedi",
    },
  },
  email: "some@gmail",
};

// console.log(regular.name.user.firtName);

const obj1 = {
  1: "a",
  2: "b",
};

const obj2 = {
  3: "a",
  4: "b",
};

// const obj3 = { obj1, obj2 };
// const obj3 = Object.assign({}, obj1, obj2);

const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

const users = [
  {
    id: 1,
    email: "vikas@123",
  },
  {
    id: 2,
    email: "vikas@123",
  },
  {
    id: 3,
    email: "vikas@123",
  },
  {
    id: 4,
    email: "vikas@123",
  },
];

users[1].email;
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course = {
  name: "js hindi",
  price: "999",
  teacher: "vikas",
};

// console.log(course.name);

const { price } = course;

console.log(price);
