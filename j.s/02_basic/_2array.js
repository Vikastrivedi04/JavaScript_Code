const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_hero = ["superman", "flash", "Batman"];

// marvel_heros.push(dc_hero);
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const all = marvel_heros.concat(dc_hero);
// console.log(all);

const all_new_hero = [...marvel_heros, ...dc_hero];

// console.log(all_new_hero);

const another_array = [1, 2, 3, 4, [5, 6]];

const real = another_array.flat();

// console.log(real);

console.log(Array.isArray("vikas"));
console.log(Array.from("vikas"));
console.log(Array.from({ name: "vikas" })); // interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
