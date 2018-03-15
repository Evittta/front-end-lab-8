const floors = Number(prompt(`Please, enter natural number from 1 to 20 included`, `7`));
let arr = [];
let i = 0;

if ( floors > 0 && floors <= 20 && Number.isInteger(floors) ) {
  while (i < floors) {
    for (let j = 0; j < floors - i - 1; j++) {
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
  console.error(`Incorrect!`);
}
