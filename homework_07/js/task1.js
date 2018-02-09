let floor = Number(prompt("Please enter natural number N (0 < N <= 20)", "7"));
let arr = [];
let i = 0;

if (floor > 0 && floor <= 20) {
  while (i < floor) {
    for (let j = 0; j < floor - i - 1; j++) {
      arr.push("   ");
    }
    for (let k = -1; k <= i * 2 - 1; k++) {
      arr.push("[~]");
    }
    arr.push("\n");
    i++;
  }
  console.log(arr.join(""));
} else {
  console.error("Incorrect!");
}
