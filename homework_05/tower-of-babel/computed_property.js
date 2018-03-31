const evenOrOdd = +process.argv[2];
const evenOrOddKey = evenOrOdd % 2 === 0 ? "even" : "odd";
const sum = +process.argv[3] + evenOrOdd;
const obj = {
  [evenOrOddKey]: evenOrOdd,
  [sum]: sum
};
console.log(obj);
