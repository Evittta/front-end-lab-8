let firstSide = Number(prompt(`Input first side of triangle`, `3`));
let secondSide = Number(prompt(`Input second side of triangle`, `4`));
let thirdSide = Number(prompt(`Input third side of triangle`, `5`));
let type;

let semiperimeter = (firstSide + secondSide + thirdSide) / 2;
let square = Math.sqrt(semiperimeter *
                      (semiperimeter - firstSide) *
                      (semiperimeter - secondSide) *
                      (semiperimeter - thirdSide));

if ( firstSide <= 0 || secondSide <= 0 || thirdSide <= 0 || isNaN(square) || square <= 0 ) {
  console.error(`Incorrect data`);
} else {
  if ( firstSide * firstSide === secondSide * secondSide + thirdSide * thirdSide ||
       secondSide * secondSide === firstSide * firstSide + thirdSide * thirdSide ||
       thirdSide * thirdSide === firstSide * firstSide + secondSide * secondSide ) {
    type = "right triangle";
  } else if ( firstSide === secondSide && firstSide === thirdSide ) {
    type = "equilateral";
  } else if ( firstSide === secondSide || firstSide === thirdSide || secondSide === thirdSide ) {
    type = "isosceles";
  } else {
    type = "scalene";
  } 
  console.log(`Type of triangle is ${type} and square is ${parseFloat(square.toFixed(2))}`);
}