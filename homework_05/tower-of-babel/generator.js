const max = process.argv[2];

const FizzBuzz = function*() {
  let number = 1;
  while (number <= max) {
    let data;
    if (number % 3 === 0 && number % 5 === 0) {
      data = `FizzBuzz`;
    } else if (number % 3 === 0) {
      data = `Fizz`;
    } else if (number % 5 === 0) {
      data = `Buzz`;
    } else {
      data = number;
    }
    number++;
    yield data;
  }
}();

for (let n of FizzBuzz) {
  console.log(n);
}
