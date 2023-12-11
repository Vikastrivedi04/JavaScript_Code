const coding = ["js", "ruby", "pay", "java"];

// const values = coding.forEach((item) => {
//   console.log(item);
// });

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((nums) => {
//   return nums > 4;
// });

console.log(myNums);

const BOOKS = [
  { title: "book one", genre: "fiction-1", public: 1981, edition: 2032 },
  { title: "book two", genre: "fiction-2", public: 1982, edition: 2010 },
  { title: "book three", genre: "fiction-3", public: 1983, edition: 2009 },
  { title: "book four", genre: "fiction-4", public: 1954, edition: 2006 },
  { title: "book five", genre: "fiction-5", public: 1965, edition: 2003 },
  { title: "book six", genre: "fiction-6", public: 1976, edition: 2007 },
  { title: "book seven", genre: "fiction-7", public: 1987, edition: 2002 },
  { title: "book eight", genre: "fiction-8", public: 1988, edition: 2005 },
  { title: "book nine", genre: "fiction-9", public: 1989, edition: 2007 },
];

// const userBooks = BOOKS.filter((bk) => bk.genre === "fiction-6");
const userBooks = BOOKS.filter(
  (bk) => bk.public >= 1980 && bk.genre === "fiction-7"
);
console.log(userBooks);
