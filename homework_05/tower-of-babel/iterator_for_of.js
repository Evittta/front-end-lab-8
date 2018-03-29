const max = process.argv[2];

const FizzBuzz = {
  [Symbol.iterator]() {
    let number = 1;
    return {
      next() {
        let data;
        if (number > max) {
          return { done: true };
        } else if (number % 3 === 0 && number % 5 === 0) {
          data = `FizzBuzz`;
        } else if (number % 3 === 0) {
          data = `Fizz`;
        } else if (number % 5 === 0) {
          data = `Buzz`;
        } else {
          data = number;
        }
        number++;
        return { done: false, value: data };
      }
    };
  }
};

for (let n of FizzBuzz) {
  console.log(n);
}
