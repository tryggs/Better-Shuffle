const lib = require("./shuffle");
const arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
  80, 81,
];
const shuffleResult = lib.shuffle(arr);
const getDifference = (num1, num2) => Math.abs(num1 - num2);
const reducer = (accumulator, curr) => accumulator + curr;
let allPairs = [];

const getAdbon = () => {
  for (let i = 0; i < shuffleResult.length - 1; i++) {
    allPairs.push(getDifference(shuffleResult[i], shuffleResult[i + 1]));
  }
  const tdbon = allPairs.reduce(reducer);
  const adbon = tdbon / shuffleResult.length;
  return adbon;
};
console.log(shuffleResult);
console.log(getAdbon());
